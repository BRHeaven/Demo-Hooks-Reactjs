import HookContextProvider from "../Hooks/HookContextProvider";
import HookUseCallback from "../Hooks/HookUseCallback";
import HookUseContext from "../Hooks/HookUseContext";
import HookUseEffect from "../Hooks/HookUseEffect";
import HookUseMemo from "../Hooks/HookUseMemo";
import HookUseReducer from "../Hooks/HookUseReducer";
import HookUseRef from "../Hooks/HookUseRef";
import HookUseSelectorAndUseDispatch from "../Hooks/HookUseSelectorAndUseDispatch";
import HooksUseState from "../Hooks/HooksUseState";
import { HooksRedux, SectionMain } from "../Jss/Section";

export default function Home(props) {
  return (
    <SectionMain>
        <HooksUseState/>
        <HookUseEffect/>
        <HookUseCallback/>
        <HookUseMemo/>
        <HookUseRef/>
        <HookUseReducer/>
        <HookContextProvider>
          <HookUseContext/>
        </HookContextProvider>
        <HooksRedux>
          <HookUseSelectorAndUseDispatch/>
        </HooksRedux>
    </SectionMain>
  )
};