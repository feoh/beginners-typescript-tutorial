interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  // 1. Wait for the network response
  const response = await fetch("https://swapi.py4e.com/api/people/1");
  
  // 2. Wait for the data to be parsed into JSON
  const data: LukeSkywalker = await response.json();

  // 3. Return the result
  return data;
};
