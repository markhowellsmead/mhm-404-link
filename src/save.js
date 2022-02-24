import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { getBlockDefaultClassName } from "@wordpress/blocks";

const classNameBase = getBlockDefaultClassName("mhm/link-404");

export default function save({ attributes }) {
    const { domain } = attributes;
    return (
        <div {...useBlockProps.save()}>
            <InnerBlocks.Content />
            <div className={`${classNameBase}__linkholder`} data-domain={domain} />
        </div>
    );
}
