import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Modal } from "../../components/modal";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvite: (email: string) => void;
}

const ModalDescription = (
  <p className="text-sm text-zinc-400">
    Os convidados irão receber e-mails para confirmar a participação na viagem.
  </p>
);

export const InviteGuestsModal = ({
  closeGuestsModal,
  addNewEmailToInvite,
  emailsToInvite,
  removeEmailFromInvite,
}: InviteGuestsModalProps) => {
  return (
    <Modal
      title="Selecionar Convidados"
      closeModal={closeGuestsModal}
      description={ModalDescription}
    >
      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map((email, index) => (
          <div
            key={`${email}+${index}`}
            className="flex py-1.5 px-2.5 rounded-md bg-zinc-800 items-center gap-2"
          >
            <span className="text-zinc-300">{email}</span>
            <button type="button" onClick={() => removeEmailFromInvite(email)}>
              <X className="size-4 text-zinc-400" />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <form
        onSubmit={addNewEmailToInvite}
        className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
      >
        <AtSign className="size-5 text-zinc-400" />

        <input
          name="email"
          type="email"
          placeholder="Digite o email do convidado"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />

        <button
          type="submit"
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          Convidar
          <Plus className="size-5" />
        </button>
      </form>
    </Modal>
  );
};
