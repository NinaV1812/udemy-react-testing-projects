import React from "react";
import {shallow} from "enzyme";
import checkPropType from "check-prop-types"
import {findByTestAttr, checkProps} from "../tests/testUtils"
import Congrats from "./Congrats";


const defaultProps = {success:false}

const setUp = (props={}) => {
    const setUpProps = {...defaultProps, ...props}
return shallow(<Congrats {...setUpProps}/>)
} 

test("rendesr without error", ()=> {
const wrapper = setUp();
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.length).toBe(1)
})

test("renders no text when 'success' prop is false", () => {
const wrapper = setUp({success: false});
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.text()).toBe('');
})

test("renders non-empty congrats message when success props is true", ()=> {
const wrapper = setUp({success: true})
const message = findByTestAttr(wrapper, "congrats-message")
expect(message.text().length).not.toBe(0)
})

// test("does not throw a warning with expected props", ()=> {
//     const expectedProps = {success: false};
//     // const errorProp = checkPropType(Congrats.propTypes, expectedProps, 'prop', Congrats.name)
//     // expect(errorProp).toBeUndefined()
//     checkProps(Congrats, expectedProps)
// })