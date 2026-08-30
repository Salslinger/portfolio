const ModalComponent = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-3xl rounded-lg bg-red-300 p-6 text-white"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-4 top-2 text-2xl hover:text-primary"
          onClick={onClose}
        >
          X
        </button>

        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
