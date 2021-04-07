import React from 'react'
import {ProfileStatus} from "./ProfileStatus";
import {create, ReactTestInstance} from "react-test-renderer";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const updateStatus = (status: string) => {
        }
        const component = create(<ProfileStatus status={"Hello"} updateStatus={updateStatus}/>);
        const instance = component.getInstance() as ReactTestInstance & { state: { status: string } };
        expect(instance.state.status).toBe("Hello");
    });

    test("after creation span should be displayed with correct status", () => {
        const updateStatus = (status: string) => {
        }
        const component = create(<ProfileStatus status={"Hello"} updateStatus={updateStatus}/>);
        const instance = component.root
        let span = instance.findByType("span")
        expect(span).not.toBeNull()
    });

    test("after creation input shouldn't be displayed", () => {
        const updateStatus = (status: string) => {
        }
        const component = create(<ProfileStatus status={"Hello"} updateStatus={updateStatus}/>);
        const instance = component.root

        expect(() => {
            instance.findByType("input")
        }).toThrow()
    });

    test("after creation span should contain correct status", () => {
        const updateStatus = (status: string) => {
        }
        const component = create(<ProfileStatus status={"Hello"} updateStatus={updateStatus}/>);
        const instance = component.root
        let span = instance.findByType("span")
        expect(span.children[0]).toBe('Hello');
    });

    test("input should be displayed instead of span", () => {
        const updateStatus = (status: string) => {
        }
        const component = create(<ProfileStatus status={"Hello"} updateStatus={updateStatus}/>);
        const instance = component.root
        let span = instance.findByType("span")
        span.props.onDoubleClick()
        let input = instance.findByType("input")
        expect(input.props.value).toBe('Hello');
    });

    test("callback should be called", () => {
        const mockFn = jest.fn();
        const component = create(<ProfileStatus status={"Hello"} updateStatus={mockFn}/>);
        const instance = component.getInstance() as ReactTestInstance & {deactivateEditMode: () => void}

        instance.deactivateEditMode()
        expect(mockFn.mock.calls.length).toBe(1);
    });
});