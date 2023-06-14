import React, { useRef, useMemo } from 'react';
import JoditEditor from  'jodit-react';

function RTEditor({ value, onChange, height }) {
    const editor = useRef(null);

    const config = useMemo(
        () => ({
            readonly                      : false, 
            minHeight                        : height || '600px',
            width                         : '100%',
            enableDragAndDropFileToEditor : true,
            buttons                       : [
                'source',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'ul',
                'ol',
                '|',
                'font',
                'fontsize',
                'brush',
                'paragraph',
                '|',
                'image',
                'table',
                'link',
                '|',
                'left',
                'center',
                'right',
                'justify',
                '|',
                'undo',
                'redo',
                '|',
                'hr',
                'eraser',
                'fullsize',
                'preview',
            ],
            uploader             : { insertImageAsBase64URI: true },
            removeButtons        : ['brush', 'file'],
            showXPathInStatusbar : false,
            showCharsCounter     : false,
            showWordsCounter     : false,
            toolbarAdaptive      : true,
            toolbarSticky        : false,
            controls             : {
                font: {
                    list: {
                        'PT Sans,Arial,sans-serif': 'PT Sans',
                    },
                },
                fontsize: {
                    list: {
                        8  : 8,
                        10 : 10,
                        12 : 12,
                        14 : 14,
                        16 : 16,
                        18 : 18,
                        20 : 20,
                        22 : 22,
                        24 : 24,
                        26 : 26,
                        28 : 28,
                        30 : 30,
                        32 : 32,
                        34 : 34,
                        36 : 36,
                        38 : 38,
                        40 : 40,
                        42 : 42,
                        44 : 44,
                        46 : 46,
                        48 : 48,
                    },
                },
            },
        }),
        [height],
    );

    return (
        <JoditEditor
            config={config}
            value={value}
            ref={editor}
            tabIndex={0}
            onChange={(k) => {
                onChange(k);
            }}

        />
    );
}
export default RTEditor;