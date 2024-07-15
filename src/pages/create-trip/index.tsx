import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalConfirmTrip } from "./ModalConfirmTrip";
import { InviteGuestsModal } from "./ModalInviteGuests";

function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setConfirmTripModalOpen] = useState(false);

  function openGuestsInput() {
    setGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite((prev) => [...prev, email]);

    e.currentTarget.reset();
  }

  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailsToInvite(newEmailList);
  }

  function createTrip() {
    navigate("trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-homepage-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="flex text-lg text-zinc-400 flex-1">
                  {emailsToInvite.length > 0
                    ? `${emailsToInvite.length} pessoa(s) convidada(s)`
                    : "Quem estará na viagem?"}
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800"></div>

              <button
                onClick={openConfirmTripModal}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ModalConfirmTrip
          createTrip={createTrip}
          closeConfirmTripModal={closeConfirmTripModal}
          setOwnerEmail={() => {}}
          setOwnerName={() => {}}
        />
      )}
    </div>
  );
}

export default CreateTripPage;
