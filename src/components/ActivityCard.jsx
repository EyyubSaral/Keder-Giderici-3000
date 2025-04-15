export default function ActivityCard({ number, activityData }) {
  console.log(activityData); // Gelen veriyi kontrol etmek için

  return (
    <div className="activity-card">
      <div className="inner-card-container">
        <div className="frontSide">
          <p className="title">Seçenek {number}</p>
        </div>
        <div className="backSide">
          <p className="activity">{activityData.quote}</p>
          <div className="stats-container">
            <p>
              <span>Karakter:</span> {activityData.character}
            </p>
            <p>
              <span>Resim:</span>
              <img
                src={activityData.image}
                alt={activityData.character}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
