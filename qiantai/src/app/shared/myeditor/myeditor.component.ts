import {Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output, OnChanges} from '@angular/core';
import {RequestOptions} from '@angular/http';



export class MyeditorComponent implements AfterViewInit, OnChanges, OnDestroy {
    @Input() elementId: string;
    @Input() initialContent: string;
    @Output() onEditorKeyup = new EventEmitter();
    editor: any;

    constructor() {}

    ngAfterViewInit() {
        const self = this;
        tinymce.init({
            selector: '#' + this.elementId,
            height: 500,
            plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
            toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
            skin_url: '/assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('KeyUp', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            },
            images_upload_handler: function ($event, success, failure) {
                // const formData = new FormData();
                // const uploadUrl = 'file/?name=' + $event.filename();
                // formData.append('file', $event.blob(), $event.filename());
                // const options = new RequestOptions();
                // self.commonService.postImg(uploadUrl, formData, options).subscribe(
                //     data => {
                //         if (data.success) {
                //             self.toastService.success("上传成功!");
                //             success("../../../../phy/v1/file/" + data.message.split('_')[0]);
                //         }else {
                //             self.toastService.error(data.message);
                //         }
                //     }
                // )
            }
        });
    }

    ngOnChanges() {
        if (this.editor) {
            if (this.initialContent && this.initialContent.length > 0) {
                this.editor.setContent(this.initialContent);
            } else {
                this.editor.setContent('');
            }
        }
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
