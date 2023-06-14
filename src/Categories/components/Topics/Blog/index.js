import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.css";
import RTEditor from "./Editor/Form";
import { useForm } from "react-hook-form";
import FORM_MAPPING from "./Editor/Form/controls";
import { startCase } from "lodash";
import Header from "../Header";
import {Link} from "react-router-dom";
const { v4: uuidv4 } = require('uuid');

function isEmpty(value) {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}


const Blog = ({ blogData = {}, showIndivisualBlog = () => { },setShowCreateBlog=()=>{} ,handleSubmitbutton}) => {
  const [value, setValue] = useState("");

  const { register, handleSubmit, control, errors, watch, setValue: setFormValue } = useForm();

  useEffect(() => {
    FORM_MAPPING.forEach((item) => {
      setFormValue(item?.name, blogData?.[item?.name])
    })
    setFormValue("subCategory", blogData?.subCategory)
    setValue(blogData?.content||'')


  }, [blogData, setFormValue])

  const fomValues = watch();

  const onSubmit = () => {
    if(isEmpty(blogData)){
      handleSubmitbutton({
        id:uuidv4(),...fomValues, content: value
      })
    }else{
      handleSubmitbutton({
       ...blogData,...fomValues, content: value
      })
    }
  };

  return (
    <>
      <div className={styles.blogGoBack} >
          <span> &#8592;</span> <Link onClick={() => setShowCreateBlog(false)} > <span>Go Back</span></Link> 
        <Header />
      </div>

      <form className={styles.addTopicForm}>
        <div className={styles.topicFormWrapper}>
          <div className={styles.topicForm}>
            {FORM_MAPPING.map((controlTtem) => (
              <div key={controlTtem.name} className={styles.formGroup}>
                <label className={styles.formLabel}>
                  {startCase(controlTtem.label)}
                </label>
                <input
                  type="text"
                  name={controlTtem.name}
                  placeholder="Type"
                  control={control}
                  className={styles.formInput}
                  styles={controlTtem.styles}
                  {...register(controlTtem.name)}
                  rules={{ required: true }}
                />
                {errors?.topicName && (
                  <span className={styles.formError}>This field is required.</span>
                )}

              </div>
            ))}
          </div>
          <div className={styles.blogItemAuthor}>
            <img className={styles.blogItemCover} src={fomValues?.cover} alt='cover' />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.content}>Content</label>
          <div className={styles.container}>
            <div className={styles.editor}>
              <RTEditor value={value} onChange={setValue} />
            </div>
            <div className={styles.preview}>
              <div className={styles.template}>
                <span>Preview</span>
              </div>
              <div
                className={styles.child}
                dangerouslySetInnerHTML={{ __html: value }}
              />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.buttonWrapper}>
        <button type="submit" class={styles.button}
          onClick={() => {
            handleSubmit(onSubmit)();
            showIndivisualBlog({ value: value ,...fomValues});
            setShowCreateBlog(false)
          }}
        >
          <span class={styles.button__text}> submit</span>
        </button>
      </div>
    </>
  );
};

export default Blog;
