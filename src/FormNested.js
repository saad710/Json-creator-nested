import React from 'react';
import { Form, Text, NestedForm } from "react-form";


const Friend = ({ i }) => (
    <NestedForm field={["friends", i]} key={`nested-friend-${i}`}>
      <Form>
        {formApi => (
          <div>
            <h2>Friend</h2>
            <label htmlFor={`nested-friend-first-${i}`}>First name</label>
            <Text field="firstName" id={`nested-friend-first-${i}`} />
            <label htmlFor={`nested-friend-last-${i}`}>Last name</label>
            <Text field="lastName" id={`nested-friend-last-${i}`} />
            <label htmlFor={`nested-person-first-${i}`}>Company</label>
            <Text field="company" id={`nested-person-first-${i}`} />
            <label htmlFor={`nested-friend-person-last-${i}`}>Address</label>
            <Text field="address" id={`nested-person-last-${i}`} />
          </div>
        )}
      </Form>
    </NestedForm>
  );

const FormNested = () => {
    return (
        <div>
             <Form onSubmit={submittedValues => console.log(submittedValues)}>
          {formApi => (
            <div>
              <form onSubmit={formApi.submitForm} id="form3">
                {formApi.values.friends &&
                  formApi.values.friends.map((f, i) => (
                    <div key={i}>
                      <Friend i={i} />
                      <button
                        className="btn btn-danger mb-2 ml-2"
                        onClick={() => formApi.removeValue("friends", i)}
                        type="button"
                      >
                        Remove
                      </button>
                     
                    </div>
                  ))}
                <button
                  onClick={() =>
                    formApi.addValue("friends", {
                      firstName: "",
                      lastName: "",
                      person :{
                        details: {
                          company:''
                        },
                        address : ""
                      }
                    })}
                  type="button"
                  className="mb-4 ml-2 btn btn-success"
                >
                  Add Friend
                </button>
                <button type="submit" className="mb-4 ml-2 btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          )}
        </Form>
            
        </div>
    );
};

export default FormNested;