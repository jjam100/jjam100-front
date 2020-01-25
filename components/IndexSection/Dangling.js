import './style/Dangling.scss';
const Dangling = props => (
	<svg xmlns="http://www.w3.org/2000/svg" id="numbering" width="77" height="218.5" viewBox="0 0 77 218.5">
		<g id="타원_1" class="cls-1" data-name="타원 1" transform="translate(0 141.5)">
			<circle cx="38.5" cy="38.5" r="38.5" class="cls-4" />
			<circle cx="38.5" cy="38.5" r="38" class="cls-5" />
		</g>
		<path id="선_16" d="M0 0v142" class="cls-2" data-name="선 16" transform="translate(38.5)" />
		<text id="_2" class="cls-3" data-name="2" transform="translate(32 187.5)">
			<tspan x="0" y="0">
				{props.number}
			</tspan>
		</text>
	</svg>
);

export default Dangling;
