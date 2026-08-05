import React from 'react';
import './styles.css';

const NODES = [
    {id: 'totvs', label: 'TOTVS', sub: 'ERP', angle: -90, kind: 'system'},
    {id: 'brightspace', label: 'D2L Brightspace', sub: 'LMS', angle: -30, kind: 'system'},
    {id: 'blip', label: 'Take Blip', sub: 'WhatsApp', angle: 30, kind: 'system'},
    {id: 'pagseguro', label: 'PagSeguro', sub: 'Payments', angle: 90, kind: 'system'},
    {id: 'sydle', label: 'Sydle One', sub: 'BPM', angle: 150, kind: 'system'},
    {id: 'claude', label: 'Claude', sub: 'LLM', angle: 210, kind: 'ai'},
];

const CENTER = 200;
const RADIUS = 148;
const NODE_R = 34;

const polar = (angleDeg, radius) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        x: CENTER + radius * Math.cos(rad),
        y: CENTER + radius * Math.sin(rad),
    };
};

const IntegrationMap = ({caption}) => {
    return (
        <div className="integration-map">
            <svg viewBox="0 0 400 400" role="img" aria-label={caption}>
                {NODES.map((node) => {
                    const {x, y} = polar(node.angle, RADIUS);
                    return (
                        <line
                            key={`line-${node.id}`}
                            x1={CENTER}
                            y1={CENTER}
                            x2={x}
                            y2={y}
                            className={`integration-map__line integration-map__line--${node.kind}`}
                        />
                    );
                })}

                {NODES.map((node) => {
                    const {x, y} = polar(node.angle, RADIUS);
                    return (
                        <g key={node.id} className={`integration-map__node integration-map__node--${node.kind}`}>
                            <circle cx={x} cy={y} r={NODE_R}/>
                            <text x={x} y={y - 3} textAnchor="middle" className="integration-map__label">
                                {node.label}
                            </text>
                            <text x={x} y={y + 12} textAnchor="middle" className="integration-map__sublabel">
                                {node.sub}
                            </text>
                        </g>
                    );
                })}

                <g className="integration-map__center">
                    <circle cx={CENTER} cy={CENTER} r={52}/>
                    <text x={CENTER} y={CENTER + 6} textAnchor="middle" className="integration-map__center-label">
                        DIEGO
                    </text>
                </g>
            </svg>
            {caption && <span className="integration-map__caption">{caption}</span>}
        </div>
    );
};

export default IntegrationMap;
