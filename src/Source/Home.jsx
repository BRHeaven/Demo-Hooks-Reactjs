import HookUseCallback from "../Hooks/HookUseCallback";
import HookUseEffect from "../Hooks/HookUseEffect";
import HooksUseState from "../Hooks/HooksUseState";
import { SectionMain } from "../Jss/Section";

export default function Home(props) {
  return (
    <SectionMain>
        <HooksUseState/>
        <HookUseEffect/>
        <HookUseCallback/>
    </SectionMain>
  )
};