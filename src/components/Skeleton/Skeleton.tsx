const shimmer =
  'before:absolute object-cover before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:to-white ';




const nombreClase = ` text-3xl prototype`;

export default function Skeleton({texto="Cargando"}: {texto?: string}) {

  return (


    <div className="flex h-screen w-screen items-center justify-center  ">
      
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex relative">
          <h1 className={nombreClase}>{texto}</h1>
          <div className={` absolute top-full overflow-hidden  w-full h-1 shadow-sm ${shimmer}`}></div>
        
        </div>
        <p className="text-xs p-3"></p>
      </div>
    </div>
  );
}