// import { FC, ChangeEvent, useState, useEffect } from 'react';
// import { ModalPropsI } from '../../assets/interfaces';
// import {
//   ModalDiv,
//   ContentDiv,
//   Wrap,
//   IconClose,
//   Button,
//   Form,
//   ButtonsWrap,
//   ContentWrap,
//   Select,
//   Input,
//   FormButton,
// } from './AddTrip.styled';
// import axios from 'axios';

// export const AddTrip: FC<ModalPropsI> = ({ handleClose, show, trips }) => {
//   const [cityId, setCityId] = useState();
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     event.preventDefault();

//     trips.find((el: any) => {
//       if (el.cityName === event.target.value) {
//         setCityId(el.id);
//       }
//     });
//   };

//   const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     const value = event.target.value;
//     setEndDate(value);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     const value2 = event.target.value;
//     setStartDate(value2);
//   };

//   useEffect(() => {
//     let transformStartDate = new Date(startDate).getTime();
//     let transformEndDate = new Date(endDate).getTime();
//     if (transformEndDate < transformStartDate) {
//       alert('Choose another day');
//       const endDateInput = document.getElementById('end-date') as HTMLInputElement;
//       endDateInput.value = `${''}-${''}-${''}`;
//     }
//   }, [endDate, startDate]);

//   const today = new Date();
//   const fifteenDaysFromNow = new Date();
//   fifteenDaysFromNow.setDate(today.getDate() + 15);
//   const minDate = today.toISOString().split('T')[0];
//   const maxDate = fifteenDaysFromNow.toISOString().split('T')[0];

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     event.preventDefault();

//     await axios.put(`https://65d13dbaab7beba3d5e4371f.mockapi.io/trip/${cityId}`, {
//       startTrip: `${startDate}`,
//       endTrip: `${endDate}`,
//     });

//     handleClose();
//     window.location.reload();
//   };

//   return (
//     <ModalDiv block={show ? 'block' : 'none'}>
//       <ContentDiv>
//         <Wrap>
//           <p>Create Trip</p>
//           <Button onClick={handleClose}>
//             <IconClose />
//           </Button>
//         </Wrap>
//         <Form onSubmit={handleSubmit}>
//           <ContentWrap>
//             <label htmlFor="city-name">
//               <span style={{ color: 'red' }}>*</span> City
//             </label>
//             <Select name="city-name" onChange={handleChange} required>
//               <option value="">Please select a city</option>
//               {trips.map((trip) => (
//                 <option key={trip.id} value={trip.cityName} id={trip.id}>
//                   {trip.cityName}
//                 </option>
//               ))}
//             </Select>
//             <label htmlFor="start-date">
//               <span style={{ color: 'red' }}>*</span> Start date
//             </label>
//             <Input
//               type="date"
//               name="start-date"
//               minLength={1}
//               maxLength={64}
//               placeholder="Select date"
//               autoComplete="nope"
//               required
//               onChange={handleInputChange}
//               min={minDate}
//               max={maxDate}
//             />
//             <label htmlFor="end-date">
//               <span style={{ color: 'red' }}>*</span> End date
//             </label>
//             <Input
//               id="end-date"
//               type="date"
//               name="end-date"
//               minLength={1}
//               maxLength={64}
//               placeholder=" "
//               autoComplete="nope"
//               required
//               onChange={handleEndDateChange}
//               min={minDate}
//               max={maxDate}
//             />
//           </ContentWrap>
//           <ButtonsWrap>
//             <FormButton onClick={handleClose}>Cancel</FormButton>
//             <FormButton type="submit">Save</FormButton>
//           </ButtonsWrap>
//         </Form>
//       </ContentDiv>
//     </ModalDiv>
//   );
// };

import { FC, ChangeEvent, useState, useEffect } from 'react';
import { ModalPropsI } from '../../assets/interfaces';
import {
  ModalDiv,
  ContentDiv,
  Wrap,
  IconClose,
  Button,
  Form,
  ButtonsWrap,
  ContentWrap,
  Select,
  Input,
  FormButton,
} from './AddTrip.styled';
import axios from 'axios';

export const AddTrip: FC<ModalPropsI> = ({ handleClose, show, trips }) => {
  const [cityId, setCityId] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = event.target.value;
    setCityId(selectedCityId);
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEndDate(value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setStartDate(value);
  };

  useEffect(() => {
    let transformStartDate = new Date(startDate).getTime();
    let transformEndDate = new Date(endDate).getTime();
    if (transformEndDate < transformStartDate) {
      alert('Choose another day');
      setEndDate('');
    }
  }, [endDate, startDate]);

  const today = new Date();
  const fifteenDaysFromNow = new Date();
  fifteenDaysFromNow.setDate(today.getDate() + 15);
  const minDate = today.toISOString().split('T')[0];
  const maxDate = fifteenDaysFromNow.toISOString().split('T')[0];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!cityId || !startDate || !endDate) {
      alert('Please fill all the fields');
      return;
    }

    try {
      await axios.put(`https://65d13dbaab7beba3d5e4371f.mockapi.io/trip/${cityId}`, {
        startTrip: startDate,
        endTrip: endDate,
      });

      // Save trip details to local storage
      const tripDetails = { cityId, startDate, endDate };
      localStorage.setItem('tripDetails', JSON.stringify(tripDetails));

      handleClose();
      window.location.reload();
    } catch (error) {
      console.error('Error while saving trip:', error);
    }
  };

  return (
    <ModalDiv block={show ? 'block' : 'none'}>
      <ContentDiv>
        <Wrap>
          <p>Create Trip</p>
          <Button onClick={handleClose}>
            <IconClose />
          </Button>
        </Wrap>
        <Form onSubmit={handleSubmit}>
          <ContentWrap>
            <label htmlFor="city-name">
              <span style={{ color: 'red' }}>*</span> City
            </label>
            <Select name="city-name" onChange={handleChange} required>
              <option value="">Please select a city</option>
              {trips.map((trip) => (
                <option key={trip.id} value={trip.id}>
                  {trip.cityName}
                </option>
              ))}
            </Select>
            <label htmlFor="start-date">
              <span style={{ color: 'red' }}>*</span> Start date
            </label>
            <Input
              type="date"
              name="start-date"
              minLength={1}
              maxLength={64}
              placeholder="Select date"
              autoComplete="nope"
              required
              value={startDate}
              onChange={handleInputChange}
              min={minDate}
              max={maxDate}
            />
            <label htmlFor="end-date">
              <span style={{ color: 'red' }}>*</span> End date
            </label>
            <Input
              type="date"
              name="end-date"
              minLength={1}
              maxLength={64}
              placeholder=" "
              autoComplete="nope"
              required
              value={endDate}
              onChange={handleEndDateChange}
              min={minDate}
              max={maxDate}
            />
          </ContentWrap>
          <ButtonsWrap>
            <FormButton onClick={handleClose}>Cancel</FormButton>
            <FormButton type="submit">Save</FormButton>
          </ButtonsWrap>
        </Form>
      </ContentDiv>
    </ModalDiv>
  );
};
