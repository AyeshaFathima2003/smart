export interface Asset {
  plant: string;
  id: string;
  name: string;
  description: string;
  imageUrls: string[];  // Change from imageUrl (string) to imageUrls (array)
  status: "ok";
  
}
