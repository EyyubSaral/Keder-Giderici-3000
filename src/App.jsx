import "./styles.css";

import Header from "./components/Header";
import ActivityCard from "./components/ActivityCard";
import { useEffect, useState } from "react";

export default function App() {
  /* Challenge

    Kullanıcının etkinlikleri Bored API için key olarak kaydedildi. Göreviniz, etkinlik verilerini almak için key'leri aşağıdaki gibi kullanmaktır: 
    
        1. Sayfa yüklendiğinde, aşağıdaki savedActivityKeys array'inde bulunan 20 key'in her biri için Bored API'den aktivite verileri alınmalıdır. Bu veri getirme işlemlerinin nasıl yapılacağını öğrenmek için API_Documentation.md dosyasını okuyun. 
        
        2. Veriler, activities state array'e 20 JavaScript nesnesi (her key/response/activity için bir tane) olarak kaydedilmelidir.  
           
        3. Şu anda activitiesData state olarak ayarlanmış olan placeHolderData'dan kurtulun. Bu veri sadece size gerçek verinin içeriği, biçimi ve faydası hakkında bir fikir vermek içindir. Sonunda, üzerinde API'den gerçek veriler bulunan 20 etkinlik kartı elde etmelisiniz. 
        
    Not: Tek yapmanız gereken activitiesData state'ini yukarıda açıklanan şekilde ayarlamaktır. Bunu doğru bir şekilde yaparsanız, aşağıdaki 33. satırda yer alan activityCardElements değişkeni etkinlik kartlarını sizin için oluşturacaktır. 
*/

  const savedActivityKeys = [
    "Homer",
    "Marge",
    "Bart",
    "Lisa",
    "Maggie",
    "Ned",
    "Burns",
    "Krusty",
    "Milhouse",
    "Apu",
    "Chief",
    "Bob",
    "Moe",
    "Ralph",
    "Comic",
  ];

  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const fetchedData = await Promise.all(
          savedActivityKeys.map(async (key) => {
            const response = await fetch(
              `https://thesimpsonsquoteapi.glitch.me/quotes?character=${key}`
            );
            const data = await response.json();
            return data.length > 0
              ? data[0]
              : { quote: "Alıntı bulunamadı", character: key };
          })
        );
        setActivitiesData(fetchedData);
      } catch (err) {
        console.error("error:", err);
      }
    };
    apiFetch();
  }, []);

  const activityCardElements = activitiesData.map((activityData, index) => {
    return (
      <ActivityCard
        key={index}
        number={index + 1}
        activityData={activityData}
      />
    );
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="container">{activityCardElements}</div>
    </div>
  );
}
