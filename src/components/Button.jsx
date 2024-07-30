export default function Button( {title="", onClick=()=>{}, color = "indigo"} ) {

    const getColorVariants = {
        "indico": "bg-indigo-800",
        "green": "bg-green-800",
        "red": "bg-red-800",
        "blue": "bg-blue-800",

    }

    return (
      <button
        className={`${getColorVariants[color]} text-white p-4 rounded-xl w-full`}
        onClick={onClick}
      >
        {title}
      </button> 

    )
}