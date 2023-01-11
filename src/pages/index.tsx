import Head from 'next/head'
import Image from 'next/image'
import TimePicker from 'react-bootstrap-time-picker';
import { Container, Row, Card, Button, Form } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { setRightTime } from "../util/getRightTime";
import React from 'react';



export default function Home() {
  const [timecome1, settimecome1] = useState(23400);
  const [timegehen1, settimegehen1] = useState(53280);
  const [workhours1, setworkhours1] = useState(0);

  const [timecome2, settimecome2] = useState(23400);
  const [timegehen2, settimegehen2] = useState(53280);
  const [workhours2, setworkhours2] = useState(0);

  const [timecome3, settimecome3] = useState(23400);
  const [timegehen3, settimegehen3] = useState(53280);
  const [workhours3, setworkhours3] = useState(0);

  const [timecome4, settimecome4] = useState(23400);
  const [timegehen4, settimegehen4] = useState(53280);
  const [workhours4, setworkhours4] = useState(0);

  const [timecome5, settimecome5] = useState(23400);
  const [timegehen5, settimegehen5] = useState(53280);
  const [workhours5, setworkhours5] = useState(0);

  //todo: remove
  const [viewM, setviewM] = useState(9.2);

  const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  var currentDay = new Date().getDay();
  
  useEffect(() => {
    setworkhours1(setRightTime(timecome1, timegehen1))
    setworkhours2(setRightTime(timecome2, timegehen2))
    setworkhours3(setRightTime(timecome3, timegehen3))
    setworkhours4(setRightTime(timecome4, timegehen4))
    setworkhours5(setRightTime(timecome5, timegehen5))
    
    var hourTextField:any = document.getElementsByClassName("hourTextField");
    for (var i = 0; i < hourTextField.length; i++) {
      if (hourTextField[i].textContent.startsWith("-")) {
        hourTextField[i].style.color = "red";
      } else {
        hourTextField[i].style.color = "green";
      }
    }

    if(currentDay > 0 && currentDay < 6)
    {
      var card = document.getElementById(days[currentDay-1]);
      card.setAttribute('class', 'card border-dark');
    }
  })

  var wochenstunden = Math.round(((workhours1 - 7.8)+(workhours2 - 7.8)+(workhours3 - 7.8)+(workhours4 - 7.8)+(workhours5 - 7.8)) * 100) / 100;
  

  
  return (
    <>
      <Head>
        <title>SWM Stundenrechner</title>
        <link rel="icon" href="/swmstreifen.png" />
      </Head>


      <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4 text-center">Willkommen zum Stundenrechner der <br/>
        <Image className='object-center' src="/swmicon.svg" alt="SWM" width={240} height={80} />
      </h1>

      <div className='grid grid-rows-2 grid-flow-col gap-4'>
        <div className="row-span-2 max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>

        <div className="row-span-2 max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>

        <div className="row-span-2 max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>

      <div className='grid grid-rows-3 grid-flow-col gap-4'>
        <div className="row-span-3 max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>

        <div className="row-span-3 max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>
      

        <Container>
          <Row>
          <Card id='Montag' style={{ width: viewM +"rem", margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title className='textcenter'>Montag</Card.Title>
            <TimePicker value={timecome1} onChange={el => settimecome1(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen1} onChange={el => settimegehen1(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4 className = 'hourTextField'>{workhours1.toFixed(2)}</h4>
              Überstunden: <h4 className = 'hourTextField'>{Math.round((workhours1 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card id='Dienstag' style={{ width: viewM +"rem", margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title className='textcenter'>Dienstag</Card.Title>
            <TimePicker value={timecome2} onChange={el => settimecome2(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen2} onChange={el => settimegehen2(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4 className = 'hourTextField'>{workhours2.toFixed(2)}</h4>
              Überstunden: <h4 className = 'hourTextField'>{Math.round((workhours2 - 7.8) * 100) / 100}</h4>
            </Card.Text>  
            </Card.Body>
          </Card>
          <Card id='Mittwoch' style={{ width: viewM +"rem", margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title className='textcenter'>Mittwoch</Card.Title>
            <TimePicker value={timecome3} onChange={el => settimecome3(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen3} onChange={el => settimegehen3(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4 className = 'hourTextField'>{workhours3.toFixed(2)}</h4>
              Überstunden: <h4 className = 'hourTextField'>{Math.round((workhours3 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card id='Donnerstag' style={{ width: viewM +"rem", margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title className='textcenter'>Donnerstag</Card.Title>
            <TimePicker value={timecome4} onChange={el => settimecome4(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen4} onChange={el => settimegehen4(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4 className = 'hourTextField'>{workhours4.toFixed(2)}</h4>
              Überstunden: <h4 className = 'hourTextField'>{Math.round((workhours4 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card id='Freitag' style={{ width: viewM +"rem", margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title className='textcenter'>Freitag</Card.Title>
            <TimePicker value={timecome5} onChange={el => settimecome5(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen5} onChange={el => settimegehen5(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4 className = 'hourTextField'>{workhours5.toFixed(2)}</h4>
              Überstunden: <h4 className = 'hourTextField'>{Math.round((workhours5 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          </Row> <br/>
          <h3>Wochenstunden Kontingent: {wochenstunden} Std.</h3>
          <Button className='highlight-button'
          style={{ display: 'block', margin: '0 auto' }}
            onClick={() => {
              settimecome1(23400);
              settimegehen1(53280);
              settimecome2(23400);
              settimegehen2(53280);
              settimecome3(23400);
              settimegehen3(53280);
              settimecome4(23400);
              settimegehen4(53280);
              settimecome5(23400);
              settimegehen5(53280);
            }}
          >
            Zurücksetzen
          </Button>
        </Container>

      <footer className="cntr-footer">
          Created with  <a href='Cat.mp4'>❤ </a>  by Marlon Gehrmann and Julian Maier 
      </footer>
      <footer>
      This is not an official app of Stadtwerke München <br/>
      <a href='https://github.com/uhmarlon/Hourscal-SWM'>OPEN SOURCE</a>
      </footer>
      </>
  )
}