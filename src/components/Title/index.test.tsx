// foo.spec.ts
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";
import * as React from "react";
// import TestRenderer from "react-test-renderer";
import Title from "./index";

it("Should render Title", () => {
  const props = { title: "App для поиска и выделения символов в textarea" };

  const comp = shallow(<Title {...props} />);
  // const testInstance = comp.root;

  // const wrapper = comp.find("h1");
  const result = comp.contains(
    <h1>App для поиска и выделения символов в textarea</h1>
  );
  expect(result).toBeTruthy();
});
