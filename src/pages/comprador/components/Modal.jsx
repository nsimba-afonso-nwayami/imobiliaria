import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, icon, children }) {
  // Bloquear scroll quando aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">

      {/* HEADER */}
      <div className="flex items-center gap-4 px-6 py-5 border-b border-neutral-100 bg-white shadow-sm z-10">

        {icon && (
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-950 shadow-sm border border-blue-100">
            <i className={`${icon} text-lg`}></i>
          </div>
        )}

        <div className="flex-1">
          <h2 className="text-blue-950 font-black text-lg tracking-tight">
            {title}
          </h2>

          <p className="text-[10px] text-neutral-400 uppercase font-black tracking-widest leading-none mt-1">
            Imobi Premium
          </p>
        </div>

        {/* FECHAR */}
        <button
          onClick={onClose}
          className="
            w-10 h-10 cursor-pointer flex items-center justify-center
            rounded-full bg-neutral-50 text-neutral-400
            hover:bg-sky-50 hover:text-sky-700
            transition-all duration-300 active:scale-90
          "
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 text-neutral-700 bg-neutral-50/40 scrollbar-thin scrollbar-thumb-neutral-200">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

    </div>,
    document.body
  );
}
