import styled from 'styled-components'

const Container = styled.div`
  --primary: ${({ theme }) => theme.PINK_SALMON_100};
  --bezier: cubic-bezier(0.42,0,0.58,1);
  --trans-dur: 0.3s;

  display: flex; 
  position: relative;

  .rating__display {
  font-size: 1em;
  font-weight: 500;
  position: absolute;
  top: -20px;
  left: 80px;
  width: 100px;
  }

.rating__star {
  display: block;
  overflow: visible;
  pointer-events: none;
  width: 2em;
  height: 2em;
}

.rating__star-ring, .rating__star-fill, .rating__star-line, .rating__star-stroke {
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.rating__star-ring, .rating__star-fill, .rating__star-line {
  stroke: var(--primary);
}

.rating__star-fill {
  fill: var(--primary);
  transform: scale(0);
  transition: fill var(--trans-dur) var(--bezier), transform var(--trans-dur) var(--bezier);
}

.rating__star-stroke {
  stroke: #c7cad1;
  transition: stroke var(--trans-dur);
}
.rating__label {
  cursor: pointer;
  padding: 0.125em;
}

/* 
.rating__label--delay1 .rating__star-ring, .rating__label--delay1 .rating__star-fill, .rating__label--delay1 .rating__star-line, .rating__label--delay1 .rating__star-stroke {
  animation-delay: 0.05s;
}

.rating__label--delay2 .rating__star-ring, .rating__label--delay2 .rating__star-fill, .rating__label--delay2 .rating__star-line, .rating__label--delay2 .rating__star-stroke {
  animation-delay: 0.1s;
}

.rating__label--delay3 .rating__star-ring, .rating__label--delay3 .rating__star-fill, .rating__label--delay3 .rating__star-line, .rating__label--delay3 .rating__star-stroke {
  animation-delay: 0.15s;
}

.rating__label--delay4 .rating__star-ring, .rating__label--delay4 .rating__star-fill, .rating__label--delay4 .rating__star-line, .rating__label--delay4 .rating__star-stroke {
  animation-delay: 0.2s;
} */

.rating__input {
  -webkit-appearance: none;
  appearance: none;
}

.rating__input:hover ~ [data-rating]:not([hidden]) {
  display: none;
}

.rating__input-1:hover ~ [data-rating="1"][hidden], 
.rating__input-2:hover ~ [data-rating="2"][hidden], 
.rating__input-3:hover ~ [data-rating="3"][hidden], 
.rating__input-4:hover ~ [data-rating="4"][hidden], 
.rating__input-5:hover ~ [data-rating="5"][hidden], .rating__input:checked:hover ~ [data-rating]:not([hidden]) {
  display: block;
}

.rating__input-1:hover ~ .rating__label:first-of-type .rating__star-stroke,
.rating__input-2:hover ~ .rating__label:nth-of-type(-n + 2) .rating__star-stroke, 
.rating__input-3:hover ~ .rating__label:nth-of-type(-n + 3) .rating__star-stroke,
.rating__input-4:hover ~ .rating__label:nth-of-type(-n + 4) .rating__star-stroke,
.rating__input-5:hover ~ .rating__label:nth-of-type(-n + 5) .rating__star-stroke {
  stroke: var(--primary);
  transform: scale(1);
}

.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-ring,
.rating__input-2:checked ~ .rating__label:nth-of-type(-n + 2) .rating__star-ring,
.rating__input-3:checked ~ .rating__label:nth-of-type(-n + 3) .rating__star-ring,
.rating__input-4:checked ~ .rating__label:nth-of-type(-n + 4) .rating__star-ring,
.rating__input-5:checked ~ .rating__label:nth-of-type(-n + 5) .rating__star-ring {
  animation-name: starRing;
}

.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-stroke, .rating__input-2:checked ~ .rating__label:nth-of-type(-n + 2) .rating__star-stroke, .rating__input-3:checked ~ .rating__label:nth-of-type(-n + 3) .rating__star-stroke, .rating__input-4:checked ~ .rating__label:nth-of-type(-n + 4) .rating__star-stroke, .rating__input-5:checked ~ .rating__label:nth-of-type(-n + 5) .rating__star-stroke {
  animation-name: starStroke;
}

.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-line, .rating__input-2:checked ~ .rating__label:nth-of-type(-n + 2) .rating__star-line, .rating__input-3:checked ~ .rating__label:nth-of-type(-n + 3) .rating__star-line, .rating__input-4:checked ~ .rating__label:nth-of-type(-n + 4) .rating__star-line, .rating__input-5:checked ~ .rating__label:nth-of-type(-n + 5) .rating__star-line {
  animation-name: starLine;
}

.rating__input-1:checked ~ .rating__label:first-of-type .rating__star-fill,
.rating__input-2:checked ~ .rating__label:nth-of-type(-n + 2) .rating__star-fill,
.rating__input-3:checked ~ .rating__label:nth-of-type(-n + 3) .rating__star-fill,
.rating__input-4:checked ~ .rating__label:nth-of-type(-n + 4) .rating__star-fill,
.rating__input-5:checked ~ .rating__label:nth-of-type(-n + 5) .rating__star-fill {
  animation-name: starFill;
}

.rating__sr {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

@keyframes starRing {
  from, 20% {
    animation-timing-function: ease-in;
    opacity: 1;
    r: 8px;
    stroke-width: 16px;
    transform: scale(0);
  }
  35% {
    animation-timing-function: ease-out;
    opacity: 0.5;
    r: 8px;
    stroke-width: 16px;
    transform: scale(1);
  }
  50%, to {
    opacity: 0;
    r: 16px;
    stroke-width: 0;
    transform: scale(1);
  }
}

@keyframes starFill {
  from, 40% {
    animation-timing-function: ease-out;
    transform: scale(0);
  }
  60% {
    animation-timing-function: ease-in-out;
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

@keyframes starStroke {
  from {
    transform: scale(1);
  }
  20%, to {
    transform: scale(0);
  }
}

@keyframes starLine {
  from, 40% {
    animation-timing-function: ease-out;
    stroke-dasharray: 1 23;
    stroke-dashoffset: 1;
  }
  60%, to {
    stroke-dasharray: 12 12;
    stroke-dashoffset: -12;
  }
}
`

export function InputStars({ handleRating, rating }) {
  return (
    <Container className="rating__stars">
      <input id="rating-1" className="rating__input rating__input-1" type="radio" name="rating" value="1" checked={rating === 1} onChange={handleRating} />
      <input id="rating-2" className="rating__input rating__input-2" type="radio" name="rating" value="2" checked={rating === 2} onChange={handleRating} />
      <input id="rating-3" className="rating__input rating__input-3" type="radio" name="rating" value="3" checked={rating === 3} onChange={handleRating} />
      <input id="rating-4" className="rating__input rating__input-4" type="radio" name="rating" value="4" checked={rating === 4} onChange={handleRating} />
      <input id="rating-5" className="rating__input rating__input-5" type="radio" name="rating" value="5" checked={rating === 5} onChange={handleRating} />

      <label className="rating__label" htmlFor="rating-1">
        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle className="rating__star-ring" fill="none" stroke="#000" strokeWidth="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
              <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
        <span className="rating__sr">1 star—Terrible</span>
      </label>
      <label className="rating__label" htmlFor="rating-2">
        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle className="rating__star-ring" fill="none" stroke="#000" strokeWidth="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
              <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
        <span className="rating__sr">2 stars—Bad</span>
      </label>
      <label className="rating__label" htmlFor="rating-3">
        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle className="rating__star-ring" fill="none" stroke="#000" strokeWidth="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
              <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
        <span className="rating__sr">3 stars—OK</span>
      </label>
      <label className="rating__label" htmlFor="rating-4">
        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle className="rating__star-ring" fill="none" stroke="#000" strokeWidth="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
              <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
        <span className="rating__sr">4 stars—Good</span>
      </label>
      <label className="rating__label" htmlFor="rating-5">
        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle className="rating__star-ring" fill="none" stroke="#000" strokeWidth="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
              <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
        <span className="rating__sr">5 stars—Excellent</span>
      </label>
      <p className="rating__display" data-rating="1" hidden>Horrível</p>
      <p className="rating__display" data-rating="2" hidden>Ruím</p>
      <p className="rating__display" data-rating="3" hidden>OK</p>
      <p className="rating__display" data-rating="4" hidden>Bom</p>
      <p className="rating__display" data-rating="5" hidden>Excelente</p>
    </Container>
  )
}