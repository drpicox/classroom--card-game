import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { ClickReadyInTheMainHeader } from "./ClickReadyInTheMainHeader";
import { ClickRefreshInTheMainHeader } from "./ClickRefreshInTheMainHeader";
import { UseTheBrowserOf } from "./UseTheBrowserOf";

export default function configureTestStepsPlayersInjector(injector: Injector) {
  injector.register(PostLineStep, ClickReadyInTheMainHeader);
  injector.register(PostLineStep, ClickRefreshInTheMainHeader);
  injector.register(PostLineStep, UseTheBrowserOf);
}
