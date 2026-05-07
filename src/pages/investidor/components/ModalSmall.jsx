import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function ModalSmall({ isOpen, onClose, title, icon, children }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      {/* MODAL BOX PEQUENO */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* HEADER */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-100">

          {icon && (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-50 text-blue-950 border border-blue-100">
              <i className={`${icon} text-sm`}></i>
            </div>
          )}

          <div className="flex-1">
            <h2 className="text-sm font-black text-blue-950">
              {title}
            </h2>

            <p className="text-[10px] text-neutral-400 uppercase font-black tracking-widest">
              Imobi Premium
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              w-8 h-8 cursor-pointer flex items-center justify-center
              rounded-full bg-neutral-50 text-neutral-400
              hover:bg-sky-50 hover:text-sky-700
              transition
            "
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>

        {/* BODY */}
        <div className="p-5 text-neutral-700 bg-white">
          {children}
        </div>

      </div>
    </div>,
    document.body
  );
}
