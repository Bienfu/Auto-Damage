import React, { Component, useCallback } from "react";
import UploadService from "../services/upload-files.service";
import Select from "react-select";
import PhotoSelection from "../PhotoSelection";


export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    // this.selectFile = this.selectFile.bind(this);
    // this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "local",
      photo: undefined,
      fileInfos: [],
      list: [],
    };
  }

  // componentDidMount() {
  //   UploadService.getFiles().then((response) => {
  //     this.setState({
  //       fileInfos: response.data,
  //     });
  //   });
  // }

  // selectFile(event) {
  //   this.setState({
  //     selectedFiles: event.target.files,
  //     photo: URL.createObjectURL(event.target.files[0]),
  //   });
  // }

  startTimer() {
    let counter = 0;
    console.log(counter);
    const interval = setInterval(() => {
      counter += 12.5;
      if (counter == 100) {
        console.log("timer finished");
        clearInterval(interval);
      }
    }, 500);
  }

  upload = (file, index) => {
    // let currentFile = this.state.selectedFiles[0];
    let currentFile = file;
    const displayInfo = {
      progress: 0,
      photoUrl: currentFile,
    };

    UploadService.upload(currentFile, (event) => {
      this.startTimer();
      displayInfo.progress = Math.round((100 * event.loaded) / event.total);
      this.forceUpdate();
    })
      .then((response) => {
        // var currentdate = new Date();
        // const onUpload = this.props.onUpload;
        // // const photos = this.props.photos;
        // // const index = this.props.index;
        // // const title = this.props.title;
        // displayInfo.newName = response.data.filename;
        // const fileInfo = {
        //   description: undefined,
        //   name: response.data.originalname,
        //   newName: response.data.filename,
        //   size: response.data.size,
        //   date: currentdate,
        //   url: "http://localhost:8080/uploads/" + response.data.filename,
        // };
        // onUpload(fileInfo);
      })
      // .then((files) => {
      //   this.setState({
      //     fileInfos: files.data,
      //   });
      // })
      .catch(() => {
        const rand = index;
        let speed = 0;
        if (rand == 0){
          speed = 12.5;
        }
        else if (rand == 1){
          speed = 25;
        }
        else if (rand == 2){
          speed = 12.5/2;
        }
        let counter = 0;
        console.log(counter);
        const interval = setInterval(() => {
          counter += speed;
          displayInfo.progress = counter;
          this.forceUpdate();
          if (counter == 100) {
            console.log("timer finished");
            clearInterval(interval);
          }
        }, 500);
        // this.setState({
        //   progress: 0,
        //   message: "Could not upload the file!",
        //   currentFile: undefined,
        // });
      });
    return displayInfo;
  };

  onSubmit = (list) => {
    const newList = list;
    this.setState({
      list: newList,
    });
    this.uploadMulti(newList);
  }

  uploadMulti(newList) {
    // const fileList = Array.from(evt.target.files);
    const photoList = [
      "./front.jpg",
      "./door.jpg",
      "./backwheel.jpg"
  ];
  const list = newList;
    // var i = 0;
    // for (i = 0; i < length; i++) {
    //   this.upload(evt, i);
    // }
    const photos = list.map((file, index) => this.upload(photoList[file], index));
    this.setState({
      photo: photos,
    });
  };

  renderPhotos(photo) {
    const photolist = photo;
    const checkedList = this.props.checkedList;

    return photolist.map((item, index) => (
      <div key={index} className="PhotoPickerSelection">
        <img
          src={item.photoUrl}
          className="PhotoPickerPhoto"
          // style={{ filter: `grayscale(${filter}%)` }}
        />
        <div className={item.progress < 100 ? "progress" : "hide"}>
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={item.progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: item.progress + "%" }}
          >
            {item.progress}%
          </div>
        </div>
        <Select
          placeholder="Tag Damage Area..."
          onChange={(tags) =>
            tags ? (item.tags = tags.map((tag) => tag.value)) : null
          }
          menuPlacement="top"
          maxMenuHeight={"150px"}
          isMulti
          isClearable={false}
          isSearchable={false}
          options={checkedList}
        />
      </div>
    ));
  }

  handleChange(event) {
    const newValue = URL.createObjectURL(event.target.files[0]);
    //   newValue.includes(idx)? newValue.splice(newValue.indexOf(idx),1) : newValue.push(idx);
    this.setState({
      photo: newValue,
    });
    // startTimer();
    //   setTimeout(function(){ alert("Hello"); }, 3000);
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      photo,
      list,
    } = this.state;

    const { onUpdate } = this.props;

    return (
      <div>
          {list.length == 0 && <PhotoSelection onSubmit={this.onSubmit}/>}
          {/* <button onClick={this.uploadMulti}>Click</button> */}
        {/* <label className={!photo ? "btn btn-default UploadButtons" : "hide"}>
          <input
            type="file"
            name="file"
            multiple="multiple"
            onChange={this.uploadMulti}
            className="inputfile"
          />
          <label for="file">
            <i className="fas fa-file-upload uploadIcon"></i>
            <div className="UploadLabelText">Select files to upload</div>
          </label>
        </label> */}
        <div className={photo ? "imageContainer" : "hide"}>
          {/* <img
            src={photo}
            className="PhotoPickerPhoto"
            // style={{ filter: `grayscale(${filter}%)` }}
          /> */}
          <div>{photo ? this.renderPhotos(photo) : null}</div>
          {/* {currentFile && (
            <div className={progress < 100 ? "progress" : "hide"}>
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progress + "%" }}
              >
                {progress}%
              </div>
            </div>
          )} */}
        </div>
        {photo && photo.length && (
          <button
            className="continue finalContinue"
            onClick={() => onUpdate(photo)}
          >
            Continue
          </button>
        )}

        {/* <div className="alert alert-light" role="alert">
          {message}
        </div> */}

        {/* <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </div> */}
      </div>
    );
  }
}
