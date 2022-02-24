import { InnerBlocks, InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, __experimentalInputControl as InputControl } from "@wordpress/components";

export default function edit({ attributes, setAttributes }) {
    const { domain } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody label='Block settings'>
                    <InputControl
                        label={"Remote domain"}
                        value={domain}
                        onChange={domain => setAttributes({ domain })}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                <InnerBlocks
                    allowedBlocks={["core/paragraph"]}
                    template={[["core/paragraph", { placeholder: "Add some text" }]]}
                    templateLock={false}
                />
            </div>
        </>
    );
}
