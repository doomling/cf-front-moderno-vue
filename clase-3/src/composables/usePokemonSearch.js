import { ref } from "vue";

export function usePokemonSearch() {
  const query = ref(null);
  const loading = ref(null);
  const error = ref(null);
  const pokemon = ref(null);

  async function fetchPokemon(name) {
    const n = name.trim().toLowerCase();
    if (!n) {
      pokemon.value = null;
      error.value = null;
      return;
    }

    loading.value = true;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
      if (!res.ok) {
        if (res.status === 404) {
          pokemon.value = null;
          error.value = "Pokemon no encontrado";
          return;
        }
        throw new Error("HTTP" + res.status);
      }

      const data = await res.json();
      console.log(data);

      const image =
        data?.sprites?.other?.["official-artwork"]?.front_default ||
        data?.sprites?.front_default ||
        "";

      pokemon.value = {
        name: data.name,
        id: data.id,
        weight: data.weight,
        height: data.height,
        image,
      };
    } catch (e) {
      console.log(e);
      error.value = "Tuvimos problemas con la consulta";
    } finally {
      loading.value = false;
    }
  }

  function onSearch() {
    fetchPokemon(query.value);
  }

  return { query, loading, error, pokemon, onSearch };
}
