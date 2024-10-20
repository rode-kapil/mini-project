import React, { useState } from 'react';
import "./QuizPage.css";
import { useNavigate } from 'react-router-dom';

const questions = {
  Math: [
    {
      question: 'An operational amplifier (Op-Amp) is primarily used for :',
      options: ['Signal amplification', 'Signal attenuation', 'Digital-to-analog conversion', 'Modulation'],
      answer: 'Signal amplification',
    },
    {
      question: 'The voltage gain of an inverting Op-Amp is given by :',
      options: ['Av = 1 + ( Ri / Rin )', 'Av = - ( Ri / Rin )', 'Av = ( Ri / Rin )', 'Av = - 1'],
      answer: 'Av = - ( Ri / Rin )',
    },
    {
      question: 'The output of an ideal Op-Amp is :',
      options: ['Infinite', 'Zero', 'Proportional to the input', 'None of the above'],
      answer: 'Proportional to the input',
    },
    {
      question: 'The most commonly used IC fabrication technology is :',
      options: ['Bipolar', 'CMOS', 'TTL', 'ECL'],
      answer: 'CMOS',
    },
    {
      question: 'A comparator circuit compares :',
      options: ['Two voltage levels', 'Two current levels', 'One voltage and one current level', 'Two resistances'],
      answer: 'Two voltage levels',
    },
    {
      question: 'Which IC is used for voltage regulation ?',
      options: ['555 Timer', '741 Op-Amp', '7805', '4017 Decade Counter'],
      answer: '7805',
    },
    {
      question: 'The 555 timer IC can be used in which of the following modes ?',
      options: ['Astable', 'Monostable', 'Bistable', 'All of the above'],
      answer: 'All of the above',
    },
    {
      question: 'The IC 741 is an example of :',
      options: ['Voltage regulator', 'Operational amplifier', 'Flip-flop', 'Counter'],
      answer: 'Operational amplifier',
    },
    {
      question: 'The output of a Schmitt trigger is :',
      options: ['Analog', 'Digital', 'Tri-state', 'None of the above'],
      answer: 'Digital',
    },
    {
      question: 'In an Op-Amp, CMRR stands for :',
      options: ['Common Mode Rejection Ratio', 'Current Mode Rejection Ratio', 'Common Mode Resistance Ratio', 'Current Management Resistance Ratio'],
      answer: 'Common Mode Rejection Ratio',
    },
    {
      question: 'Which of the following is true for an ideal operational amplifier ?',
      options: ['Infinite input impedance and zero output impedance', 'Zero input impedance and infinite output impedance', 'Infinite gain and infinite bandwidth', 'Zero gain and zero bandwidth'],
      answer: 'Infinite input impedance and zero output impedance',
    },
    {
      question: 'In a 555 timer IC, the discharge transistor is turned ON during the :',
      options: ['High output', 'Low output', 'Reset state', 'Both high and low output'],
      answer: 'Low output',
    },
    {
      question: 'The slew rate of an operational amplifier is defined as :',
      options: ['Maximum rate of change of input voltage', 'Maximum rate of change of output voltage', 'Ratio of input to output voltage', 'Maximum output current'],
      answer: 'Maximum rate of change of output voltage',
    },
    {
      question: 'In a 555 timer, the astable mode produces :',
      options: ['A single pulse', 'A constant high signal', 'A square wave output', 'No output'],
      answer: 'A square wave output',
    },
    {
      question: 'A 741 Op-Amp typically operates with :',
      options: ['Single supply voltage', 'Dual supply voltage', 'Triple supply voltage', 'No supply voltage'],
      answer: 'Dual supply voltage',
    },
    {
      question: 'In an analog-to-digital converter (ADC), the resolution is defined as :',
      options: ['The number of bits in the digital output', 'The maximum input voltage', 'The minimum change in the input voltage that can be detected', 'The speed of conversion'],
      answer: 'The minimum change in the input voltage that can be detected',
    },
    {
      question: 'The gain-bandwidth product of an operational amplifier is :',
      options: ['The product of voltage gain and bandwidth', 'The sum of voltage gain and bandwidth', 'The product of input impedance and bandwidth', 'The sum of input and output impedances'],
      answer: 'The product of voltage gain and bandwidth',
    },
    {
      question: 'A phase-locked loop (PLL) is used to :',
      options: ['Amplify low-frequency signals', 'Demodulate FM signals', 'Convert digital signals to analog signals', 'Generate sinusoidal signals'],
      answer: 'Demodulate FM signals',
    },
    {
      question: 'The duty cycle of a pulse waveform is the ratio of :',
      options: ['On-time to total time', 'Off-time to total time', 'Total time to on-time', 'Frequency to on-time'],
      answer: 'On-time to total time',
    },
    {
      question: 'Which of the following ICs is commonly used for analog-to-digital conversion ?',
      options: ['7805', 'LM324', 'ADC0804', 'LM741'],
      answer: 'ADC0804',
    },
    {
      question: 'In a voltage follower configuration of an Op-Amp, the voltage gain is :',
      options: ['0', '1', 'Infinite', 'Less than 1'],
      answer: '1',
    },
    {
      question: 'The thermal noise in integrated circuits can be reduced by :',
      options: ['Increasing resistance', 'Decreasing temperature', 'Increasing voltage', 'Decreasing capacitance'],
      answer: 'Decreasing temperature',
    },
    {
      question: 'The offset voltage of an Op-Amp can be reduced using :',
      options: ['Feedback resistors', 'Offset nulling terminals', 'Differential amplifiers', 'Capacitors'],
      answer: 'Offset nulling terminals',
    },
    {
      question: 'A Schmitt trigger is used to :',
      options: ['Convert sinusoidal signals to square waves', 'Provide a constant output', 'Eliminate noise in digital signals', 'Generate analog signals'],
      answer: 'Eliminate noise in digital signals',
    },
    {
      question: 'Which type of filter is designed to pass signals with frequencies higher than a certain cutoff frequency ?',
      options: ['Low-pass filter', 'High-pass filter', 'Band-pass filter', 'Band-stop filter'],
      answer: 'High-pass filter',
    },
  ],
  English: [
    {
      question: 'Which of the following is a unipolar device ?',
      options: ['Diode', 'BJT', 'FET', 'SCR'],
      answer: 'FET',
    },
    {
      question: 'The operating point of a transistor is also called the :',
      options: ['Bias point', 'Active region', 'Load line', 'Cutoff region'],
      answer: 'Bias point',
    },
    {
      question: 'Which component is used to store electric charge ?',
      options: ['Resistor', 'Capacitor', 'Inductor', 'Diode'],
      answer: 'Capacitor',
    },
    {
      question: 'The main function of a rectifier is to :',
      options: ['Amplify signals', 'Convert AC to DC', 'Convert DC to AC', 'Filter signals'],
      answer: 'Convert AC to DC',
    },
    {
      question: 'Which of the following is a semiconductor material ?',
      options: ['Copper', 'Silicon', 'Aluminum', 'Gold'],
      answer: 'Silicon',
    },
    {
      question: 'In a common emitter amplifier, the input is applied to :',
      options: ['Emitter', 'Base', 'Collector', 'Ground'],
      answer: 'Base',
    },
    {
      question: 'In an ideal diode, the reverse current is :',
      options: ['Very high', 'Zero', 'Equal to forward current', 'Depends on the applied voltage'],
      answer: 'Zero',
    },
    {
      question: 'Which type of diode is commonly used for voltage regulation ?',
      options: ['Zener diode', 'LED', 'Tunnel diode', 'Schottky diode'],
      answer: 'Zener diode',
    },
    {
      question: 'The main function of a transistor is :',
      options: ['Switching', ' Voltage regulation', 'Signal amplification', 'Noise reduction'],
      answer: 'Signal amplification',
    },
    {
      question: 'A BJT has how many terminals ?',
      options: ['2', '3', '4', '5'],
      answer: '3',
    },
    {
      question: 'Which of the following is true for a field-effect transistor (FET) ?',
      options: ['It has a high input impedance', 'It has a low input impedance', ' It is a current-controlled device', 'It has three PN junctions'],
      answer: 'It has a high input impedance',
    },
    {
      question: 'Which parameter defines the gain of a common-emitter amplifier ?',
      options: ['Voltage gain', 'Current gain', 'Power gain', 'All of the above'],
      answer: 'All of the above',
    },
    {
      question: 'The current gain of a transistor in common base configuration is denoted by :',
      options: ['β', 'α', 'γ', 'δ'],
      answer: 'α',
    },
    {
      question: 'In a full-wave rectifier, the output frequency is :',
      options: ['Equal to the input frequency', 'Half of the input frequency', 'Double the input frequency', 'Four times the input frequency'],
      answer: 'Double the input frequency',
    },
    {
      question: 'Which among the following is a power semiconductor device ?',
      options: ['MOSFET', 'IGBT', 'SCR', 'All of the above'],
      answer: 'All of the above',
    },
    {
      question: 'In a differential amplifier, the common-mode rejection ratio (CMRR) should ideally be :',
      options: ['0', '1', 'Very high', 'Very low'],
      answer: 'Very high',
    },
    {
      question: 'The Miller effect in amplifiers is associated with :',
      options: ['Voltage gain', 'Input impedance', 'Feedback capacitance', 'Power dissipation'],
      answer: 'Feedback capacitance',
    },
    {
      question: 'The early effect in a BJT is caused by :',
      options: ['Base widening', 'Base narrowing', 'Temperature changes', 'High-frequency operation'],
      answer: 'Base narrowing',
    },
    {
      question: 'In a MOSFET, the threshold voltage is the minimum gate voltage required to :',
      options: ['Turn off the device', 'Accumulate carriers in the channel', 'Deplete the channel', 'Create an inversion layer'],
      answer: 'Create an inversion layer',
    },
    {
      question: 'The thermal runaway in transistors can be avoided by :',
      options: ['Increasing base current', 'Reducing power supply voltage', 'Using heat sinks and proper biasing', 'Decreasing emitter resistance'],
      answer: 'Using heat sinks and proper biasing',
    },
    {
      question: 'The gain bandwidth product (GBP) of an op-amp is :',
      options: ['The product of voltage gain and bandwidth', 'The sum of voltage gain and bandwidth', 'Independent of the op-amp configuration', 'Inversely proportional to gain'],
      answer: 'The product of voltage gain and bandwidth',
    },
    {
      question: 'In a push-pull amplifier, crossover distortion occurs when :',
      options: ['Both transistors conduct simultaneously', 'Both transistors are off during the zero-crossing of the signal', 'One transistor conducts more than the other', 'There is negative feedback'],
      answer: 'Both transistors are off during the zero-crossing of the signal',
    },
    {
      question: 'The saturation current in a diode is mainly dependent on :',
      options: ['Doping levels', 'Applied voltage', 'Temperature', 'Junction capacitance'],
      answer: 'Temperature',
    },
    {
      question: 'In a Schmitt trigger, hysteresis is used to :',
      options: ['Decrease noise', 'Reduce input impedance', 'Increase switching speed', 'Avoid multiple triggering'],
      answer: 'Avoid multiple triggering',
    },
    {
      question: 'In a CMOS inverter, the output will be high when :',
      options: ['The NMOS is on, and PMOS is off', 'Both NMOS and PMOS are on', 'The NMOS is off, and PMOS is on', 'Both NMOS and PMOS are off'],
      answer: 'The NMOS is off, and PMOS is on',
    },
  ],
  Science: [
    {
      question: 'A flip-flop is a :',
      options: ['Sequential circuit', 'Combinational circuit', 'Multiplexer', 'Decoder'],
      answer: 'Sequential circuit',
    },  
    {
      question: 'The basic building block of a digital circuit is :',
      options: ['Resistor', 'Transistor', 'Logic gate', 'Capacitor'],
      answer: 'Logic gate',
    },
    {
      question: 'Which of the following is a universal gate ?',
      options: ['AND', 'OR', 'NAND', 'XOR'],
      answer: 'NAND',
    },
    {
      question: 'How many bits make a byte ?',
      options: ['4', '8', '16', '32'],
      answer: '8',
    },
    {
      question: 'In binary addition, 1 + 1 equals :',
      options: ['0', '1', '10', '11'],
      answer: '10',
    },
    {
      question: 'Which flip-flop changes its output on the negative edge of a clock pulse ?',
      options: ['D flip-flop', 'Edge-triggered flip-flop', 'JK flip-flop', 'SR flip-flop'],
      answer: 'Edge-triggered flip-flop',
    },
    {
      question: 'A full adder has how many inputs ?',
      options: ['2', '3', '4', '5'],
      answer: '3',
    },
    {
      question: 'The two’s complement of binary number 1010 is :',
      options: ['0101', '1010', '0110', '0111'],
      answer: '0110',
    },
    {
      question: 'The AND gate output is HIGH when :',
      options: ['Any one input is HIGH', 'All inputs are HIGH', 'Any one input is LOW', 'All inputs are LOW'],
      answer: 'All inputs are HIGH',
    },
    {
      question: 'Which of the following is a combinational logic circuit ?',
      options: ['Counter', 'Flip-flop', 'Multiplexer', 'Register'],
      answer: 'Multiplexer',
    },
    {
      question: 'Which microprocessor instruction is used to transfer data from memory to a register ?',
      options: ['MOV', 'ADD', 'SUB', 'MUL'],
      answer: 'MOV',
    },
    {
      question: 'Which addressing mode uses a pointer to refer to the memory location ?',
      options: ['Immediate addressing', 'Register addressing', 'Direct addressing', 'Indirect addressing'],
      answer: 'Indirect addressing',
    },
    {
      question: 'What is the hexadecimal equivalent of binary number 10110101 ?',
      options: ['0xB4', '0xA5', '0xB5', '0xA4'],
      answer: '0xB5',
    },
    {
      question: 'The output of a 2-to-4 decoder is :',
      options: ['2 lines', '4 lines', '8 lines', '16 lines'],
      answer: '4 lines',
    },
    {
      question: 'In microprocessors, the ALU stands for :',
      options: ['Arithmetic Line Unit', 'Arithmetic Logic Unit', 'Analog Logic Unit', 'Advanced Logic Unit'],
      answer: 'Arithmetic Logic Unit',
    },
    {
      question: 'Which register is used to hold the memory address of the next instruction to be executed ?',
      options: ['Data register', 'Program counter', 'Accumulator', 'Stack pointer'],
      answer: 'Program counter',
    },
    {
      question: 'What is the purpose of a multiplexer ?',
      options: ['To perform addition', 'To select one input out of many', 'To decode binary information', 'To store binary data'],
      answer: 'To select one input out of many',
    },
    {
      question: 'The clock frequency of the Intel 8086 microprocessor is :',
      options: ['5 MHz', '8 MHz', '10 MHz', '12 MHz'],
      answer: '5 MHz',
    },
    {
      question: 'Which logic gate produces a HIGH output only when both inputs are different ?',
      options: ['AND', 'OR', 'XOR', 'NAND'],
      answer: 'XOR',
    },
    {
      question: 'In the instruction cycle, the phase where the microprocessor fetches the instruction from memory is called :',
      options: ['Execution phase', 'Decode phase', 'Fetch phase', 'Store phase'],
      answer: 'Fetch phase',
    },
    {
      question: 'The T-state in a microprocessor refers to :',
      options: ['Time taken to fetch an instruction', 'One clock period', 'Execution of an instruction', 'Time to decode an instruction'],
      answer: 'One clock period',
    },
    {
      question: 'In an 8086 microprocessor, how much memory can be addressed ?',
      options: ['64 KB', '128 KB', '1 MB', '2 MB'],
      answer: '1 MB',
    },
    {
      question: 'Which counter consists of a series of flip-flops where the output of one flip-flop is connected to the input of the next ?',
      options: ['Ripple counter', 'Synchronous counter', 'Johnson counter', 'Up-down counter'],
      answer: 'Ripple counter',
    },
    {
      question: 'What is the main function of the control unit in a microprocessor ?',
      options: ['Perform arithmetic operations', 'Execute instructions', 'Direct the operation of the processor', 'Manage memory'],
      answer: 'Direct the operation of the processor',
    },
    {
      question: 'A memory mapped I/O scheme involves :',
      options: ['Using separate control lines for I/O and memory', 'Using the same address space for both memory and I/O devices', 'Allocating special registers for I/O devices', 'Restricting the number of I/O devices'],
      answer: 'Using the same address space for both memory and I/O devices',
    },
  ],
};

function QuizPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const subject = localStorage.getItem('subject');
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [score, setScore] = useState(0);

  const currentQuestion = questions[subject][currentQuestionIndex];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions[subject].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selection for next question
    } else {
      localStorage.setItem('score', score);
      navigate('/result');
    }
  };

  return (
    <div className='quiz-content' style={{ display: 'flex' }}>
      {/* User info and avatar on the left */}
      <div className='userInfo' style={{ width: '30%'}}>
        <br /><br /><br /><br /><br />
        <center>
          <img
          src={user.gender === 'male' ? '../avatars/male.png' : '../avatars/female.png'}
          alt="Avatar"
          style={{ width: '100px', height: '100px' }}
          />
        </center>
        <p>{user.firstName} {user.lastName}</p>
        <p>{user.email}</p>
        <p>+91 {user.mobile}</p>
        <button className='logout-button' onClick={() => navigate('/')}>Log out</button>
        <br /><br /><br /><br />
        <p className='queNum'>Que {currentQuestionIndex+1} of 25 Questions</p>
      </div>

      {/* Quiz question and options on the right */}
      <div className='quiz-area' style={{ width: '70%', padding: '1rem' }}>
        <h2>Que {currentQuestionIndex+1} . {currentQuestion.question}</h2>

        {/* Display quiz options */}
        <div className='option-btn'>
          {currentQuestion.options.map((option) => (
          <button
           key={option}
           onClick={() => handleAnswer(option)}
           style={{
            backgroundColor: selectedOption
              ? option === currentQuestion.answer
                ? '#c6f7e3'  // Always show the correct answer in green
                : option === selectedOption
                ? '#ffd6d6'  // Show the selected wrong answer in red
                : ''
              : '',
            borderColor: selectedOption
              ? option === currentQuestion.answer
                ? '#00d397'
                : option === selectedOption
                ? '#FF4A4A'
                : ''
              : '',
            border: '2px solid black',
            margin: '5px',
            padding: '10px',
            cursor: 'pointer',
          }}
          disabled={selectedOption !== null} 
        >
          {option}
        </button>
      ))}
     </div>


        {/* Next button */}
        <button
          className='next-btn'
          onClick={handleNext}
          style={{ marginTop: '20px' }}
          disabled={!selectedOption} // Button is disabled if no option is selected
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default QuizPage;
