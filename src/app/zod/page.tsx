import { z } from "zod";

// Definisikan skema digimon dengan Zod
// Tidak perlu membuat interface lagi
const digimonSchema = z.object({
  name: z.string(),
  level: z.string(),
  img: z.string(),
});

// Definisikan array skema = digimon
const digimonSchemaArray = z.array(digimonSchema);

async function GetDigimons() {
  const res = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data = await res.json();

  // Validasi data dengan skema Zod (Parse)
  const parsedData = digimonSchemaArray.safeParse(data);

  if (parsedData.success) {
    return parsedData.data;
  } else {
    console.log(parsedData.error.flatten().fieldErrors);
    return [];
  }
}

export default async function Page() {
  const digimons = await GetDigimons();

  return (
    <div>
      <div>Hello</div>
      {digimons.map((digimon) => {
        return (
          <div className="mx-5 mb-5" key={digimon.name}>
            <div>nama : {digimon.name}</div>
            <div>level : {digimon.level}</div>
            <div>image : {digimon.img}</div>
          </div>
        );
      })}
    </div>
  );
}
