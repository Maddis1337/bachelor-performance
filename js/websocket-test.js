// Generated by CoffeeScript 1.7.1
(function() {
  var Test, allConnectionsEstablished, allTestsFinished, current_id, finishedTests, maxInstances, url,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  url = null;

  this.results = [];

  maxInstances = 0;

  this.test_instances = [];

  current_id = 0;

  window.packageCounter = 0;

  allConnectionsEstablished = function() {
    var test, _i, _len, _results;
    console.log('all connections established, triggering test');
    ResultRenderer.drawResults(results);
    _results = [];
    for (_i = 0, _len = test_instances.length; _i < _len; _i++) {
      test = test_instances[_i];
      _results.push(test.triggerSimulation());
    }
    return _results;
  };

  allTestsFinished = function() {
    return console.log('Alle Tests abgeschlossen');
  };

  finishedTests = 0;

  Test = (function() {
    function Test(instance) {
      this.triggerSimulation = __bind(this.triggerSimulation, this);
      this.onError = __bind(this.onError, this);
      this.onClose = __bind(this.onClose, this);
      this.onOpen = __bind(this.onOpen, this);
      this.receivePacket = __bind(this.receivePacket, this);
      this.getRoundTripTime = __bind(this.getRoundTripTime, this);
      this.instance = instance;
      this.id = current_id;
      current_id += 1;
      this.startTime = Date.now();
      this.established = 0;
      this.timesBetweenPackages = [];
      this.packetReceived = [];
      this.webSocket = new WebSocketRails(url);
      this.webSocket.on_open = this.onOpen;
      this.webSocket.on_close = this.onClose;
      this.webSocket.on_error = this.onError;
      this.webSocket._conn.on_close = this.onClose;
      this.webSocket._conn.on_error = this.onError;
      this.webSocket._conn.on_open = this.onOpen;
      this.firstPacket = null;
      this.lastPacket = null;
    }

    Test.prototype.getRoundTripTime = function() {
      return this.established - this.startTime;
    };

    Test.prototype.receivePacket = function(packet) {
      var msg, op, _i, _j, _len, _len1, _ref, _ref1, _results;
      packageCounter++;
      this.packetReceived.push(Date.now());
      this.receivedPacket = true;
      if (this.firstPacket === null) {
        console.log('first packet received for connection', this.id);
        this.firstPacket = Date.now;
      }
      _ref = packet.operations;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        op = _ref[_i];
        if (op.name !== 'exit') {
          continue;
        }
        this.lastPacket = Date.now;
        finishedTests++;
        _ref1 = packet.messages;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          msg = _ref1[_j];
          if (msg.type === 'error') {
            this.failed = true;
            this.error = msg.message;
          }
        }
        if (finishedTests >= maxInstances) {
          _results.push(allTestsFinished());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Test.prototype.onOpen = function(event) {
      var rtt;
      this.established = Date.now();
      rtt = this.getRoundTripTime();
      results[this.id] = [this.id, rtt];
      if (this.id >= (maxInstances - 1)) {
        allConnectionsEstablished();
      }
      console.log('established', this.id);
      return this.webSocket.bind('step', this.receivePacket);
    };

    Test.prototype.isFailed = function() {
      return this.failed || this.failedSubscription;
    };

    Test.prototype.onClose = function(event) {
      console.log("Verbindung bei Test verloren:", this.id);
      return this.closed = true;
    };

    Test.prototype.onError = function(event) {
      this.established = Date.now();
      console.log('error occurred for id: ', this.id, ' error: ', event, ' RTT:', this.getRoundTripTime());
      return this.failed = true;
    };

    Test.prototype.triggerSimulation = function() {
      this.webSocket.trigger("simulateGrid", this.instance);
      this.triggered = Date.now();
      console.log('triggered test for', this.id);
      return this.triggered;
    };

    return Test;

  })();

  $(function() {
    var $instances, $results, name, obj, runTests;
    $instances = $('#test_instance');
    for (name in Tests) {
      obj = Tests[name];
      $instances.append("<option>" + name + "</option>");
    }
    $results = $('#results');
    runTests = function(testInstance) {
      var i, test, _i, _results;
      this.test_instances = new Array(maxInstances);
      _results = [];
      for (i = _i = 0; 0 <= maxInstances ? _i < maxInstances : _i > maxInstances; i = 0 <= maxInstances ? ++_i : --_i) {
        test = new Test(testInstance);
        _results.push(this.test_instances[i] = test);
      }
      return _results;
    };
    $('#url').val(localStorage.getItem('url'));
    $(window).on('beforeunload', function(event) {
      return localStorage.setItem('url', $('#url').val());
    });
    return $('#runTests').click(function() {
      var test;
      url = $('#url').val();
      finishedTests = 0;
      maxInstances = parseInt($('#instances').val());
      window.test_instances = new Array(maxInstances);
      window.results = new Array(maxInstances);
      test = $('#test_instance').val();
      console.log("Starte Tests");
      return runTests(Tests[test]);
    });
  });

}).call(this);

//# sourceMappingURL=websocket-test.map
