import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "local",
      photo: undefined,
      fileInfos: [],
    };
  }

  // componentDidMount() {
  //   UploadService.getFiles().then((response) => {
  //     this.setState({
  //       fileInfos: response.data,
  //     });
  //   });
  // }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
      photo: URL.createObjectURL(event.target.files[0]),
    });
  }

  upload(evt) {
    // let currentFile = this.state.selectedFiles[0];
    let currentFile = evt.target.files[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
      photo: URL.createObjectURL(currentFile),
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        var currentdate = new Date();
        const onUpload = this.props.onUpload;
        const photos = this.props.photos;
        const index = this.props.index;
        const title = this.props.title;
        const newValue = [...photos];
        newValue[index] = {
          description: title,
          name: response.data.originalname,
          size: response.data.size,
          date: currentdate,
          url: "http://localhost:8080/uploads/" + response.data.filename,
        };
        return onUpload(newValue);
      })
      // .then((files) => {
      //   this.setState({
      //     fileInfos: files.data,
      //   });
      // })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
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
    } = this.state;

    return (
      <div>
        <label className={!photo ? "btn btn-default UploadButtons" : "hide"}>
          <input
            type="file"
            name="file"
            onChange={this.upload}
            className="inputfile"
          />
          <label for="file">
            <i className="fas fa-file-upload uploadIcon"></i>
            <div className="UploadLabelText">Select file to upload</div>
          </label>

          {/* <button
            className="btn btn-success"
            disabled={!selectedFiles}
            onClick={this.upload}
            >
            Upload
          </button> */}
        </label>
        <div className={photo?"imageContainer": "hide"}>
          <img
            src={photo}
            className="PhotoPickerPhoto"
            // style={{ filter: `grayscale(${filter}%)` }}
          />
          {currentFile && (
            <div className={progress < 100?"progress": "hide"}>
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
          )}
        </div>

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
