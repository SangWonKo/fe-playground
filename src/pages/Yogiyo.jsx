import React, { useCallback, useEffect, useState } from 'react';

const Yogiyo = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let r = [];
    Object.entries(data).forEach((entry, idx) => {
      for (const val of entry) {
        r.push({ label: val, idx: idx, bgColor: '', clicked: false });
      }
    });

    setItems(r.sort(() => Math.random() - 0.5));
  }, []);

  const handleClick = useCallback(
    (clickedItem) => () => {
      const { label, idx } = clickedItem;
      console.log(items);
      //이미 클릭된 버튼이 있는지 확인
      const matchItem = items.find((i) => i.clicked);
      //클릭된 버튼이 있고 빨간버튼이 없고(틀린 상태 X) 선택한 버튼이 이미 클릭된 버튼이랑 다르면(같은 버튼을 선택한게 아니면)
      if (
        !!matchItem &&
        !items.some((i) => i.bgColor === 'red') &&
        matchItem.label !== label
      ) {
        //두개의 버튼이 id가 같으면 (국가-수도가 매칭되면)
        if (idx === matchItem.idx) {
          //리스트에서 제거
          setItems((prev) => prev.filter((item) => item.idx !== idx));
        } else {
          //두개가 매칭되지 않으면
          //에러 처리 (빨간색)
          setItems((prev) =>
            prev.map((item) => ({
              ...item,
              bgColor:
                item.clicked || item.label === label ? 'red' : item.bgColor,
              clicked: item.clicked || item.label === label ? true : false,
            }))
          );
        }
      } else {
        setItems((prev) =>
          prev.map((item) => ({
            ...item,
            bgColor: item.label === label ? 'blue' : '',
            clicked: item.label === label ? true : false,
          }))
        );
      }
    },
    [items]
  );
  return (
    <div style={{ width: '200px', display: 'flex', flexWrap: 'wrap' }}>
      {!!items.length ? (
        items.map((item) => (
          <button
            key={item.label}
            type="button"
            style={{
              margin: '5px',
              cursor: 'pointer',
              ...(item.bgColor && { backgroundColor: item.bgColor }),
            }}
            onClick={handleClick(item)}
          >
            {item.label}
          </button>
        ))
      ) : (
        <>Congratulations.</>
      )}
    </div>
  );
};

export default Yogiyo;

const data = {
  Germany: 'Berlin',
  Azerbaijan: 'Baku',
  Korea: 'Seoul',
  Japan: 'Tokyo',
};
