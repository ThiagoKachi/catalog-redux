export function Sizes() {
  return (
    <div className="flex flex-col items-start mb-8">
      <h2 className="w-32 text-xl font-bold text-zinc-700">Tamanhos:</h2>
      <div className="flex flex-wrap -mb-2 mt-4">
        <button
          type="button"
          className="py-1 mb-2 mr-1 border w-11 hover:border-purple-400 hover:text-purple-600"
        >
          PP
        </button>
        <button
          type="button"
          className="py-1 mb-2 mr-1 border w-11 hover:border-purple-400 hover:text-purple-600"
        >
          P
        </button>
        <button
          type="button"
          className="py-1 mb-2 mr-1 border w-11 hover:border-purple-400 hover:text-purple-600"
        >
          M
        </button>
        <button
          type="button"
          className="py-1 mb-2 mr-1 border w-11 hover:border-purple-400 hover:text-purple-600"
        >
          G
        </button>
        <button
          type="button"
          className="py-1 mb-2 mr-1 border w-11 hover:border-purple-400 hover:text-purple-600"
        >
          GG
        </button>
      </div>
    </div>
  );
}
