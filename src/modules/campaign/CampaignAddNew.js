import useOnChange from 'hooks/useOnChange';
import ReactQuill, { Quill } from 'react-quill';
import React, { useEffect, useMemo, useState } from 'react';
import ImageUploader from 'quill-image-uploader';
import FormRow from 'components/common/FormRow';
import FormGroup from 'components/common/FormGroup';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Label } from 'components/label';
import { Input, Textarea } from 'components/input';
import { ImageUpload } from 'components/image';
import { Dropdown } from 'components/dropdown';
import { Button } from 'components/button';
import { apiURL, imgbbAPI } from 'config/config';
import 'react-quill/dist/quill.snow.css';
Quill.register('modules/imageUploader', ImageUploader);

const categoriesData = ['architecture', 'education'];

const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const [content, setContent] = useState('');
  const resetValue = () => {
    setStartDate('');
    setEndDate('');
    setContent('');
    reset();
  };
  const getDropdownLabel = (name, defaultValue) => {
    return watch(name) || defaultValue;
  };
  const handleAddNewCampaign = async (values) => {
    console.log(values);
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success('Create campaign successfully');
      resetValue();
    } catch (error) {
      toast.error('Can not create new campaign');
    }
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
          const bodyFormData = new FormData();
          console.log('upload: ~ bodyFormData', bodyFormData);
          bodyFormData.append('image', file);
          const response = await axios({
            method: 'post',
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountries() {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${filterCountry}`);
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
              <Dropdown.Select
                placeholder={getDropdownLabel('category', 'Select the category')}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={v4()}
                    onClick={() => handleSelectDropdownOption('category', category)}
                  >
                    <span className='capitalize'>{category}</span>
                  </Dropdown.Option>
                ))}
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
        <FormRow>
          <FormGroup>
            <Label>Featured Image</Label>
            <ImageUpload onChange={setValue} name='featured_image'></ImageUpload>
          </FormGroup>
          <FormGroup></FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input control={control} name='goal' placeholder='$0.00 USD'></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised amount *</Label>
            <Input control={control} name='amount' placeholder='$0.00 USD'></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input control={control} name='prefilled' placeholder='Amount Prefilled'></Input>
            <p className='text-sm text-left text-text3'>
              It will help fill amount box by click, place each amount bt comma, ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name='video' placeholder='Video'></Input>
            <p className='text-sm text-left text-text3'> Place Youtube or Vimeo Video URL</p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder='Select one'></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel('country', 'Select a country')}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder='Enter country name'
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={v4}
                      onClick={() => handleSelectDropdownOption('country', country?.name?.common)}
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker onChange={setStartDate} value={startDate} format='dd-MM-y'></DatePicker>
            {/* <Input control={control} name='startDate' placeholder='Start Date' type='date'></Input> */}
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker onChange={setEndDate} value={endDate} format='dd-MM-y'></DatePicker>
            {/* <Input control={control} name='endDate' placeholder='End Date'></Input> */}
          </FormGroup>
        </FormRow>
        <div className='mt-10 text-center'>
          <Button kind='primary' type='submit' className='px-10 mx-auto '>
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
