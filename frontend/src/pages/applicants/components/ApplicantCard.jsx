export default function ApplicantCard({ image, name, professions, last_name }) {
    
    const defaultImage = 'http://localhost:3000/img/default-image.jpg';

    const imageSrc = image ? image : defaultImage;

    return (
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
                <img src={imageSrc} alt={name} onError={(e) => { e.target.src = defaultImage; }} />
            </div>
            <div className="box-bio">
                <h2 className="bio-name">{name} {last_name}</h2>
                <p className="bio-position">{professions}</p>
            </div>
            <div className="box-actions">
                <button>
                    <i className="bi bi-star"></i>
                </button>
                <button>
                    <i className="bi bi-chat"></i>
                </button>
                <button>
                    <i className="bi bi-envelope"></i>
                </button>
            </div>
        </div>
    );
}