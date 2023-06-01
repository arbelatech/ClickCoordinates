import {IInputs, IOutputs} from "./generated/ManifestTypes";

let x= 0;
let y= 0;


export class PoCClickCoordinates implements ComponentFramework.StandardControl<IInputs, IOutputs> {

 
    private  _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: ()=> void;
    private _box: HTMLDivElement;

    /**
     * Empty constructor.
     */
    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
    {
        // Add control initialization code
        this._context = context;
        this._container = container;
        this._notifyOutputChanged = notifyOutputChanged;

        this._box = document.createElement("div");
        this._box.style.width = "100px";
        this._box.style.height = "100px";
        this._box.style.backgroundColor = "transparent";
        this._container.appendChild(this._box);

        this._box.addEventListener("click", (event:MouseEvent)=> {
            this._notifyOutputChanged();
            var bounds = this._box.getBoundingClientRect();
            x = event.clientX - Math.round(bounds.left);
            y = event.clientY - Math.round(bounds.top);
            console.log(`Clicked at (${x}, ${y})`);
        });




    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        this._container.style.overflow = "hidden";
        this._container.style.height = "auto";
        this._container.style.width = "100%";
        this._container.style.top = "100%";
        this._container.style.display = "flex";
        this._container.style.flexDirection = "column";

        this._box.style.width = `${this._container.clientWidth}px`;
        this._box.style.height = `${this._container.clientWidth}px`;
        
              
        this._box.offsetHeight;
  
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs {
        return {XAxis:`${x}`, YAxis:`${y}`};
      }
    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary

        this._container.removeEventListener("click", this._notifyOutputChanged);
    }
}
