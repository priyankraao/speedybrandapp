import React from 'react';
import { useForm,Controller } from 'react-hook-form';
import styles from './styles.module.css';
import CreatableSelect from "react-select/creatable";


const customStyles = {
    control: (provided, state) => {
        console.log(provided,"provided");
        console.log("state",state.isFocused);
        return {
            height: '46px',
            minHeight: "38px",
            borderRadius: '8px',
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            border: state.isFocused? '2px solid #667085':'2px solid #667085',
            outline: 'none',
            transition: '200ms ease-in',
            overflow:"Scroll",
            borderBottom:state.isFocused ? "4px solid #667085":"2px solid #667085",
            paddingTop: "2px",
        }
    },
    placeholder: (provided) => ({
      ...provided,
      color: '#667085',
      opacity: 0.5,
    }),
    input: (provided) => ({
      ...provided,
      color: 'black', 
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black', 
    }),
  };
  

const AddTopicForm = ({ setTopicsData ,activeTab,setAddTopic}) => {
  const { register, handleSubmit,control ,errors} = useForm();

  const onSubmit = (data) => {   
    setTopicsData((pv)=>{ 
        return{
            ...pv,
            [activeTab]:[
            ...(pv[activeTab]||[]),
                data]   
        }
    });
    setAddTopic(false)
  };

  return (
    <form className={styles.addTopicForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Topic Name:</label>
        <input
          type="text"
          name="topicName"
          placeholder='Type Topic Name'
          control={control}
          className={styles.formInput}
          {...register("topicName")}
          rules={{ required: true }}
        />
        {errors?.topicName && <span className={styles.formError}>This field is required.</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Keywords:</label>
          <Controller
            name="keywords"
            className={styles.formInput}
            render={({ field }) => (
              <CreatableSelect
                {...field}
                options={[]}
                isClearable={true}
                isMulti
                styles={customStyles}
              />
            )}
            control={control}
            rules={{ required: true }}
          />
        {errors?.keywords && <span className={styles.formError}>This field is required.</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Custom Category:</label>
        <input
          type="text"
          name="customCategory"
          placeholder='Type custom category Name'
          control={control}
          className={styles.formInput}
          {...register("customCategory")}
        />
        {errors?.customCategory && <span className={styles.formError}>This field is required.</span>}
      </div>

    
      <button type="submit" class={styles.button}>
            <span class={styles.button__text}>Save Topic</span>
      </button>
    </form>
  );
};

export default AddTopicForm;
