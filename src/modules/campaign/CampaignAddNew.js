import FormGroup from 'components/common/FormGroup';
import FormRow from 'components/common/FormRow';
import { Dropdown } from 'components/dropdown';
import { Input, Textarea } from 'components/input';
import { Label } from 'components/label';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
Quill.register('modules/imageUploader', ImageUploader);

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const [content, setContent] = useState('');
  const handleAddNewCampaign = (values) => {
    console.log(values);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          //   console.log('upload: ~ file', file);
          //   const bodyFormData = new FormData();
          //   console.log('upload: ~ bodyFormData', bodyFormData);
          //   bodyFormData.append('image', file);
          //   const response = await axios({
          //     method: 'post',
          //     url: imgbbAPI,
          //     data: bodyFormData,
          //     headers: {
          //       'Content-Type': 'multipart/form-data',
          //     },
          //   });
          //   return response.data.data.url;
        },
      },
    }),
    []
  );

  return (
    <div className='bg-white rounded-xl py-10 px-[66px]'>
      <div className='text-center'>
        <h1 className='px-16 py-4 mb-10 bg-text4 bg-opacity-10 rounded-xl font-bold text-[25px] inline-block'>
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input control={control} name='title' placeholder='Write a title'></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder='Select the category'></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            placeholder='Write a short description...'
            control={control}
            name='short-description'
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder='Write your story...'
            modules={modules}
            theme='snow'
            value={content}
            onChange={setContent}
          ></ReactQuill>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;
