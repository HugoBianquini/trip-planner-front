import { FormEvent } from "react";
import { Modal } from "../../components/modal";
import { Mail, User } from "lucide-react";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

const ModalDescription = (
  <p className="text-sm text-zinc-400">
    Para concluir a criação da viagem para{" "}
    <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span>{" "}
    nas datas de{" "}
    <span className="font-semibold text-zinc-100">27 à 30 de Agosto</span>
  </p>
);

export const ModalConfirmTrip = ({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) => {
  return (
    <Modal
      title="Confirmar criação de viagem"
      closeModal={closeConfirmTripModal}
      description={ModalDescription}
    >
      <form onSubmit={createTrip} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="size-5 text-zinc-400" />

          <input
            name="name"
            placeholder="Seu nome completo"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Mail className="size-5 text-zinc-400" />

          <input
            name="name"
            type="email"
            placeholder="Seu e-mail pessoal"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <button
          type="submit"
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center"
        >
          Confirmar criação da viagem
        </button>
      </form>
    </Modal>
  );
};
