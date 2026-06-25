export const Logo = () => {
  return (
    <a
      href="#home"
      className="text-2xl md:text-3xl font-bold font-mono tracking-tighter flex items-center cursor-pointer"
    >
      <span className="text-aurora-purple mr-1">&lt;</span>

      <div className="text-white">
        Fran<span className="text-aurora-purple">C</span>isco
      </div>

      <span className="text-aurora-purple ml-2">/&gt;</span>
    </a>
  );
};