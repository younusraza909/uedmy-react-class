import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabins(id) {
  let { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// make this function so that it can be used for create and edit function
export async function createEditCabin(newCabin, cabinToEditId) {
  //checking weather image was changed while updating or not


  const isImageChanged = newCabin.image?.startsWith?.(supabaseUrl);

  // if in image name we have slashes(/) then supabase will creat nested folder
  // so we are replacing it

  const bucketName = "cabin-images";
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = isImageChanged
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;


  // General Query
  let query = await supabase
    .from("cabins")

  // Create/Edit Cabin
  query = !cabinToEditId ? query.insert([{ ...newCabin, image: imagePath }]) : query.update({ ...newCabin, image: imagePath })
    .eq('id', cabinToEditId)



  const { data, error } = await query
    .select()
    .single()


  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  if (isImageChanged) return data

  // Upload Image
  const { storageError } = await supabase.storage
    .from(bucketName)
    .upload(imageName, newCabin.image);

  //3. Delete Cabin if we have error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    throw new Error(
      "Cabin image could not be uploaded, cabin was not created."
    );
  }


  return data;
}
