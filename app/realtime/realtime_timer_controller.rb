class RealtimeTimerController < FayeRails::Controller
  channel '/timer' do
    subscribe do
      # Rails.logger.debug "Received on #{channel}: #{inspect}"
    end
  end
end
