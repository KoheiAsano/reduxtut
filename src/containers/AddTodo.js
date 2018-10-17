import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {firebaseStorage} from '../firebase'
import Button from '@material-ui/core/Button'
import { StyleSheet, css } from 'aphrodite';
import TextField from '@material-ui/core/TextField';

const AddTodo = ({ addTodo, uploadImg }) => {
  let input
  let img

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if(!input || !input.value.trim() ){
            return
          }
          if(img){
            let storageRef=firebaseStorage.ref().child(input.value);
            storageRef.put(img).then(storageRef.getDownloadURL().then((url)=>{
              addTodo(input.value, url)
              input.value = ''
            }))
          }else{
            addTodo(input.value, null)
            input.value = ''
            img = null
          }
        }}
      >
        <TextField label={'TODO'}
           value={input}
           style={{marginRight: "10px"}} autoFocus
           onChange={(e) => input = e.target}/>
        <input type="file" name="pic" onChange={(e) => img = e.target.files[0]
                  }></input>
        <Button className={css(styles.hover)}
          onClick={
            (e) => console.log(img)
          }
        >
          confirm img
        </Button>
        <Button className={css(styles.hover)}
        type="submit"
        >
          Add Todo
        </Button>
      </form>
    </div>
  )
}
export default connect(null,actions)(AddTodo)

const styles = StyleSheet.create({
    hover: {
        color: 'white',
        backgroundColor: 'lightGreen',
        marginTop: '10px',
        marginLeft: '1px',
        width:"160px",
        height:"15px",
        ':hover': {
            backgroundColor: 'green'
        }
    },
});
