import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class TestElement01 extends LitElement {
    static styles: import("lit-element").CSSResult;
    name: string;
    count: number;
    collapsed: boolean;
    render(): import("lit-element").TemplateResult;
    private _onClick;
    private _toggle;
    private _syncName;
}
declare global {
    interface HTMLElementTagNameMap {
        'test-element01': TestElement01;
    }
}
//# sourceMappingURL=test-element01.d.ts.map