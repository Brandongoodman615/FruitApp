const NewFruit = (props) => {

  let formFields = {}

  return(
    <form onSubmit={ (e) => {props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset();} }>


      
      <input ref={input => formFields.name = input} type="text" class="form-control" placeholder="Enter the name of the item" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <br />
      <input ref={input => formFields.description = input} type="text" class="form-control" placeholder="Enter a description" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button type="button" class="btn btn-primary">Submit</button>
    </form>
  )
}