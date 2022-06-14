function GaSchedule(maxIteration, mutationRate, crossoverRate, populationSize, genSize){

    //algoritham params
    let _maxIteration = maxIteration;
    let _mutationRate = mutationRate;
    let _crossoverRate = crossoverRate;   
    let _populationSize = populationSize;
    let _genSize = genSize;
    let _best = undefined;
    let _population = [];
    
    //data    

    //graph properties
    let graphBest = [];
    let graphCandidate = [];
    let graphPopulation = [];

};

function Room(id, roomNumber, capacity){
    let _roomId = id;
    let _roomNumber = roomNumber;
    let _capacity = capacity

    Object.defineProperty(this, "roomId", {
        get: function(){ return _roomId; }
    });
    Object.defineProperty(this, "roomNumber", {
        get: function(){ return _roomNumber; }
    });
    Object.defineProperty(this, "capacity", {
        get: function(){ return _capacity; }
    });
};

function Timeslot(timeslotId, timeslot){
    let _timeslotId = timeslotId;
    let _timeslot = timeslot; //like Mon 9:00 - 10:00

    Object.defineProperty(this, "timeslotId", {
        get: function(){ return _timeslotId; }
    });
    Object.defineProperty(this, "timeslot", {
        get: function(){ return _timeslot; }
    });
};

function Professor(professorId, professorName){
    let _professorId = professorId;
    let _professorName = professorName;

    Object.defineProperty(this, "professorId", {
        get: function(){ return _professorId; }
    });
    Object.defineProperty(this, "professorName", {
        get: function(){ return _professorName; }
    });
};

function Module(moduleId, moduleCode, module, professorIds){
    let _moduleId = moduleId;
    let _moduleCode = moduleCode;
    let _module = module;
    let _professorIds = professorIds;

    this.getRandomProfessorId = function(){
        let index = utils.randomIntMinMax(_professorIds.lenght - 1);
        return _professorIds[index];
    };

    Object.defineProperty(this, "moduleId", {
        get: function(){ return _moduleId; }
    });
    Object.defineProperty(this, "moduleCode", {
        get: function(){ return _moduleCode; }
    });
    Object.defineProperty(this, "module", {
        get: function(){ return _module; }
    });
};

function Group(groupId, groupSize, moduleIds){
    let _groupId = groupId;
    let _groupSize = groupSize;
    let _moduleIds = moduleIds;

    Object.defineProperty(this, "groupId", {
        get: function(){ return _groupId}
    });
    Object.defineProperty(this, "groupSize", {
        get: function(){ return _groupSize}
    });
    Object.defineProperty(this, "moduleIds", {
        get: function(){ return _moduleIds}
    });
};

function Class(classId, groupId, moduleId){
    let _classId = classId;
    let _groupId = groupId;
    let _moduleId = moduleId;
    let _professorId;
    let _timeslot;
    let _roomId;

    this.addProfessor = function(professorId){
        _professorId = professorId;
    };

    this.addTimeslot = function(timeslotId){
        _timeslotId = timeslotId;
    };

    this.setRoomId = function(roomId){
        _roomId = roomId;        
    };
   
    Object.defineProperty(this, "classId", {
        get: function(){ return _classId; }
    });
    Object.defineProperty(this, "groupId", {
        get: function(){ return _groupId; }
    });
    Object.defineProperty(this, "moduleId", {
        get: function(){ return _moduleId; }
    });
    Object.defineProperty(this, "professorId", {
        get: function(){ return _professorId; }
    });
    Object.defineProperty(this, "timeslot", {
        get: function(){ return _timeslot; }
    });
    Object.defineProperty(this, "roomId", {
        get: function(){ return _roomId; }
    });
};

function Timetable(){
    let _rooms = [];
    let _professors = [];
    let _modules = [];
    let _groups = [];
    let _timeslots = [];
    let _numClasses = 0;

    this.addRoom = function(roomId, roomName, capacity){
        _rooms.push(new Room(roomId, roomName, capacity));
    };
    this.addProfessor = function(professorId, professorName){
        _professors.push(new Professor(professorId, professorName));
    };
    this.addModule = function(moduleId, moduleCode, module, professorIds){
        _modules.push(new Module(moduleId, moduleCode, module, professorIds));
        _numClasses = 0;
    };
    this.addGroup = function(groupId, groupSize, moduleIds){
        _groups.push(new Group(groupId, groupSize, moduleIds));
        _numClasses = 0;
    };
    this.addTimeslot = function(timeslotId, timeslot){
        _timeslots.push(new Timeslot(timeslotId, timeslot));
        _numClasses = 0;
    };
    this.createClass = function(individual){
        let classes = []; //new Class[]
        var chromosome = []; //int[]

        var chromosomePos;
        var classIndex = 0;

        
    };

    Object.defineProperty(this, "groups", {
        get: function(){ return _groups; }
    });
    Object.defineProperty(this, "timeslots", {
        get: function(){ return _timeslots; }
    });
    Object.defineProperty(this, "modules", {
        get: function(){ return _modules; }
    });
    Object.defineProperty(this, "professors", {
        get: function(){ return _professors; }
    });
};