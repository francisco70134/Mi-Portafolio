export const Logo = () => {
  return (
    <div className="text-2xl md:text-3xl font-bold font-mono tracking-tighter flex items-center">
      {/* El símbolo menor que en morado */}
      <span className="text-aurora-purple mr-1">&lt;</span>

      {/* Tu nombre en blanco puro */}
      <span className="text-white">Francisco</span>

      {/* El cierre de etiqueta en morado */}
      <span className="text-aurora-purple ml-2">/&gt;</span>
    </div>
  );
};
