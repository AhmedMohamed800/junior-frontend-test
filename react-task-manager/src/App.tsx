import CreateTask from "./components/CreateTask";
import gsap from "gsap";
import { useAside } from "./hooks/useAside";
import Button from "./components/General/Button";
import { useGSAP } from "@gsap/react";
import { PlusIcon } from "./components/General/Icons";

gsap.registerPlugin(useGSAP);

function App() {
  const { asideElement, toggleAside } = useAside();

  return (
    <>
      <header className="container">
        <div className="flex items-center justify-between py-4 border-b border-b-border  ">
          <h1 className="text-2xl text-white font-semibold">Task Manager</h1>

          <Button
            text="Create New Task"
            style="blue"
            icon={<PlusIcon />}
            onClick={() => {
              toggleAside();
            }}
          />
        </div>
      </header>

      <CreateTask ref={asideElement} toggleAside={toggleAside} />

      <main></main>
    </>
  );
}

export default App;
