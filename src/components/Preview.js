import React from "react";
import '../styles/Preview.css'
import avatar from '../assets/anonymous_man.jpg'

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview-section">
        <div className="preview-page">
          <div className="left-side">
            <div className="image-container">
              <img id="avatar" src={avatar} />
            </div>
            <div className="small-banner">
              <div className="gold-tab"></div>
              <h3>Contact</h3>
            </div>
            <div className="contact-container">
              <div className="left-side-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                {this.props.props.email}
                </div>
              <div className="left-side-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
                {this.props.props.phone}
              </div>

              <div className="left-side-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </svg>
              {this.props.props.website}
              </div>
            </div>


            <div className="small-banner">
              <div className="gold-tab"></div>
              <h3>Education</h3>
            </div>
            {
              this.props.props.education.map((edItem) => (
                <div className="education-container" key={edItem.id}>
                  <div className="degree">
                    {capitalizeWords(edItem.degree)}
                  </div>
                  <div className="education-item">
                    {capitalizeWords(edItem.school)}
                  </div>

                  <div className="education-item">
                    {edItem.yearStart} - {edItem.yearEnd}
                  </div>
                </div>
              ))
            }
            

            <div className="small-banner">
              <div className="gold-tab"></div>
              <h3>Skills</h3>
            </div>
            {
              this.props.props.skills.map((skill) => (
                <div className="education-container" key={skill.id}>
                  <div className="degree">
                    {skill.name}
                  </div>
                </div>
              ))
            }

          </div>

          <div className='right-side'>
              <div className="name-banner">
                <div className="gold-tab"></div>
                <div className="name-container">
                  <h1 className="name">{this.props.props.firstName.toUpperCase()}&nbsp;{this.props.props.lastName.toUpperCase()}</h1>
                  <div className="profession">{capitalizeWords(this.props.props.profession)}</div>
                </div>
              </div>

              <div className="small-banner">
                <div className="gold-tab"></div>
                <h3>About Me</h3>
              </div>
              <div className="about"><p>{this.props.props.about}</p></div>


              <div className="small-banner">
                <div className="gold-tab"></div>
                <h3>Experience</h3>
              </div>
              {
                this.props.props.experience.map((job) => (
                  <div key={job.id}>
                    <div className="job-title">
                      <b>{capitalizeWords(job.title)}</b> {capitalizeWords(job.company)}
                    </div>
                    <div className="experience-item">
                      {job.yearStart} - {job.yearEnd}
                    </div>
                    <p className="job-description">{job.description}</p>
                  </div>
                ))
              }
          </div>
        </div>
        <button className="pdf-btn" onClick={this.props.savePDF}> Save PDF</button>
      </div>
    )
  }
}

function capitalizeWords(str) {
  if(str === undefined || str === '' || str === null) return str;
  const words = str.split(" ");
  return words.map((word, i) => { 
      if(i !== 0 && (word.match(/^(a|an|the|for|and|nor|but|or|yet|so|at|around|after|by|along|from|of|on|in|with|without)$/i) || word === '')) {
        return word.toLowerCase();
      }
      return word[0].toUpperCase() + word.substring(1).toLowerCase(); 
  }).join(" ");
}

export default Preview;